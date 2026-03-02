import React, { useState } from "react";

import "../css/landing.css";

export default function LandingPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function capitalize(value) {
    if (!value) return "";
    return value
      .toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  async function handleSignup(e) {
    e.preventDefault();

    const payload = {
      firstName: capitalize(firstName),
      lastName: capitalize(lastName),
      email: email.trim(),
      source: "Web App",
    };

    if (!payload.email) return;

    try {
      setStatus("loading");

      const res = await fetch(`${API_BASE_URL}/api/mailer/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Signup failed");
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <>
      <section id="signup" className="sign-up-section flex section">
        <br />
        <p className="subtext">
          Be the first to know when new events are posted!
        </p>
        <br />
        <br />
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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

            <div className="mailer-form-field">
              <button
                className="btn guest-list-submit-btn"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Signing up..." : "Join Guest List"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <p className="status success">Great, you're on the list!</p>
          )}
          {status === "error" && (
            <p className="status error">Something went wrong. Try again.</p>
          )}
        </div>
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="web-contruction-can">
          This site is under construction.
        </div>
      </section>
    </>
  );
}
