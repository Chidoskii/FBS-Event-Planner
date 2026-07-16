import { Routes, Route } from "react-router-dom";

// Pages and Components
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import SignInPage from "./pages/SignInPage";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="page-contents">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
