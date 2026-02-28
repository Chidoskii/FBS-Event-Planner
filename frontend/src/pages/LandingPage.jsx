import React, { useState } from "react";

import NavBar from "../component/NavBar";
import "../css/landing.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSignup(e) {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setStatus("loading");

      // TODO: replace with your API call
      // await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });

      await new Promise((r) => setTimeout(r, 500)); // fake success
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="page">
      <NavBar />
      <main>
        <section className="section hero">
          <div className="container heroGrid"></div>
        </section>

        {/* SIGNUP (IMPORTANT) */}
        <section id="signup" className="section">
          <div className="container">
            <h2 className="h2">Get future event listings</h2>
            <p className="subtext">
              Be the first to know when new events are posted.
            </p>

            <form className="form" onSubmit={handleSignup}>
              <label className="srOnly" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Signing up..." : "Sign up"}
              </button>
            </form>

            {status === "success" && (
              <p className="status success">Great, you're on the list!</p>
            )}
            {status === "error" && (
              <p className="status error">Something went wrong. Try again.</p>
            )}
          </div>
        </section>

        <section id="general-info" className="section">
          <div className="container">GENERAL INFO</div>
        </section>

        {/* EVENTS PLACEHOLDER */}
        <section id="events" className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="h2">Featured events</h2>
                <p className="subtext">
                  This is a placeholder section for your listings.
                </p>
              </div>
              <button
                className="btn ghost"
                type="button"
                onClick={() => alert("Later: route to /events")}
              >
                View all
              </button>
            </div>

            <div className="eventsGrid">
              {[1].map((i) => (
                <article key={i} className="eventCard">
                  <div className="eventMeta">
                    <span className="pill">Upcoming</span>
                    <span className="muted">Sat • 6:00 PM</span>
                  </div>
                  <h3 className="eventTitle">Event Title Placeholder</h3>
                  <p className="muted">
                    Short description preview goes here. Keep it to 1–2 lines.
                  </p>
                  <div className="eventFooter">
                    <span className="muted">Cerritos, CA</span>
                    <button
                      className="btn small"
                      type="button"
                      onClick={() => alert("Later: RSVP flow")}
                    >
                      RSVP
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">© {new Date().getFullYear()} FBS Events</span>
          <div className="footerLinks">
            <a className="muted" href="#signup">
              Sign up
            </a>
            <a className="muted" href="#events">
              Events
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
