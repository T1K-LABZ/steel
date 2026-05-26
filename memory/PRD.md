# Nairobi Steel Works — Landing Page PRD

## Problem Statement (Original)
Build a premium landing page for a Nairobi-based steel fabrication business specialising in gates, balconies, stair railings, windows, doors, stainless steel works, custom metal fabrication, security grills and modern commercial steel designs. The site must feel trustworthy, premium, clean, modern, mobile friendly and professional but warm — using a minimal modern Kenyan business aesthetic with the brand palette (charcoal #2B2B2B, metallic silver #B0B7C3, warm gold #C58B2A, soft white #F7F7F5, dark gray text #1F1F1F).

## Architecture
- Frontend: React 19 + CRA + Tailwind 3 + shadcn/ui + sonner (toast) + lucide-react icons. Fonts: Outfit (headings) + Manrope (body) via Google Fonts.
- Backend: FastAPI with `/api` prefix, Motor + MongoDB persistence for quote requests.
- Deployment: Supervisor (frontend 3000, backend 8001), Kubernetes ingress mapping `/api` -> 8001.

## Core Requirements
- Single-page landing with Hero, About, Portfolio (filterable bento grid), Why Choose Us, Testimonials, Contact (form + map + WhatsApp CTA), Footer.
- Floating WhatsApp FAB and sticky navbar with mobile menu.
- Quote form persists to MongoDB via POST /api/quote.
- Fully responsive, smooth scrolling, scroll-reveal animations, SEO meta tags.

## User Personas
- Nairobi homeowner planning a custom gate/balcony.
- Architect or developer sourcing fabrication partner.
- Commercial client needing stainless steel works or security grills.

## Implemented
- 2025-12: Initial MVP – all sections, quote API, WhatsApp FAB, Google Maps embed, brand palette, custom typography, animations, data-testids on interactive elements.

## Backlog (P1 / P2)
- P1: Admin dashboard to view quote leads.
- P1: Email notifications via Resend/SendGrid on new quote.
- P2: Project case-study detail pages.
- P2: Multi-language (English/Swahili).
- P2: Image lightbox for portfolio.
