import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaintenancePage from "./pages/MaintenancePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MaintenancePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
