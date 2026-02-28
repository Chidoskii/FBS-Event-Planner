import "../css/navbar.css";
import logo from "../assets/fbs-32x32.png";

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
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#signin">Members</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
