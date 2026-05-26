"""Backend API tests for Nairobi Steel Works.

Covers:
- Root + status endpoints (health)
- POST /api/quote (validation + persistence)
- GET /api/quote (listing)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://metalworks-ke.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health endpoints ---
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Nairobi Steel Works" in data["message"]

    def test_status_create_and_list(self, session):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        r = session.post(f"{API}/status", json={"client_name": unique})
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["client_name"] == unique
        assert "id" in body and isinstance(body["id"], str)
        assert "timestamp" in body

        # list
        r2 = session.get(f"{API}/status")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        assert any(it.get("client_name") == unique for it in items)


# --- Quote endpoint ---
class TestQuote:
    def _payload(self, **over):
        p = {
            "name": "TEST User",
            "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
            "phone": "+254712345678",
            "service": "Gates",
            "message": "Please quote a 3m sliding gate.",
        }
        p.update(over)
        return p

    def test_create_quote_success(self, session):
        payload = self._payload()
        r = session.post(f"{API}/quote", json=payload)
        assert r.status_code == 201, r.text
        body = r.json()
        for k in ["id", "name", "email", "phone", "service", "message", "created_at"]:
            assert k in body, f"missing {k}"
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        assert body["service"] == payload["service"]
        assert isinstance(body["id"], str) and len(body["id"]) > 0

        # Verify persistence via GET
        list_r = session.get(f"{API}/quote")
        assert list_r.status_code == 200
        items = list_r.json()
        assert isinstance(items, list)
        assert any(it.get("id") == body["id"] and it.get("email") == payload["email"] for it in items)

    def test_create_quote_invalid_email(self, session):
        payload = self._payload(email="not-an-email")
        r = session.post(f"{API}/quote", json=payload)
        assert r.status_code == 422, r.text

    def test_create_quote_short_message(self, session):
        payload = self._payload(message="hi")
        r = session.post(f"{API}/quote", json=payload)
        assert r.status_code == 422, r.text

    def test_create_quote_short_name(self, session):
        payload = self._payload(name="A")
        r = session.post(f"{API}/quote", json=payload)
        assert r.status_code == 422, r.text

    def test_create_quote_missing_fields(self, session):
        r = session.post(f"{API}/quote", json={"name": "Only Name"})
        assert r.status_code == 422

    def test_list_quotes_returns_list(self, session):
        r = session.get(f"{API}/quote")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        if items:
            first = items[0]
            assert "_id" not in first  # MongoDB internal ID must be excluded
            for k in ["id", "name", "email", "service", "message", "created_at"]:
                assert k in first
