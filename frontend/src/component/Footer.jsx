import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contents-can flex flex-row">
        <div className="footer-left-can flex "></div>
        <div className="footer-middle-can flex ">
          <span className="muted">© {new Date().getFullYear()} FBS Events</span>
        </div>
        <div className="footer-right-can flex ">
          <div className="footer-links flex justify-around">
            <a className="muted" href="#Contact">
              Contact Us
            </a>
            <a className="muted" href="#signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
