import React, { useState } from "react";

import "../css/landing.css";

export default function LandingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    <section id="signup" className="sign-up-section flex section">
      <p className="subtext">
        Be the first to know when new events are posted.
      </p>
      <div className="sign-up-contents flex">
        <form className="mailer-form" onSubmit={handleSignup}>
          <div className="mailer-form-field">
            <label className="mailer-fname-field" htmlFor="fname">
              First Name
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Flash"
              value={firstName}
              required
            />
          </div>
          <div className="mailer-form-field">
            <label className="mailer-lname-field" htmlFor="lname">
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              placeholder="Gordon"
              value={lastName}
              required
            />
          </div>
          <div className="mailer-form-field">
            <label className="mailer-email-field" htmlFor="email">
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
          </div>

          <button className="btn" type="submit" disabled={status === "loading"}>
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
  );
}
