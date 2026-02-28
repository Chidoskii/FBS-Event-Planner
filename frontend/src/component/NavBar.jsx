import { Link } from "react-router-dom";

import "../css/navbar.css";
import logo from "../assets/fbs-32x32.png";
import LandingPage from "../pages/LandingPage";
import Events from "../pages/EventsPage";
import SignInPage from "../pages/SignInPage";

function NavBar() {
  return (
    <header className="navbarcan">
      <div className="navbar-content-can flex flex-row justify-between">
        <div className="brand-can flex flex-row ">
          <div className="logo" aria-hidden="true">
            <img src={logo} alt="fbs-logo" />
          </div>
          <span className="brandText">Events</span>
        </div>

        <nav className="navbar-links flex">
          <div className="navlinks-can flex">
            <Link to="/" element={<LandingPage />}>
              Home
            </Link>
            <Link to="/events" element={<Events />}>
              Events
            </Link>
            <Link to="/signin" element={<SignInPage />}>
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
