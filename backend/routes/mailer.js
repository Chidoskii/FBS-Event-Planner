const express = require("express");
const { pool } = require("../db.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all records on mailer list" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a specific record on mailer list" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST a record on mailer list" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a record from mailer list" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a record on mailer list" });
});

/**
 * POST /api/mailer/subscribe
 * body: { email, firstName?, lastName?, source? }
 */
router.post("/subscribe", async (req, res) => {
  const email = (req.body?.email || "").trim().toLowerCase();
  const firstName = (req.body?.firstName || "").trim();
  const lastName = (req.body?.lastName || "").trim();
  const source = (req.body?.source || "event").trim();

  // basic validation
  if (!email || !email.includes("@")) {
    return res
      .status(400)
      .json({ ok: false, error: "Valid email is required" });
  }

  try {
    // Requires UNIQUE index on Email for ON DUPLICATE KEY UPDATE to work
    const sql = `
      INSERT INTO Mailer (Email, FirstName, LastName, is_subscribed, subscribed_at, unsubscribed_at, source)
      VALUES (?, ?, ?, 1, NOW(), NULL, ?)
      ON DUPLICATE KEY UPDATE
        FirstName = IF(VALUES(FirstName) <> '', VALUES(FirstName), FirstName),
        LastName  = IF(VALUES(LastName)  <> '', VALUES(LastName),  LastName),
        is_subscribed = 1,
        subscribed_at = NOW(),
        unsubscribed_at = NULL,
        source = VALUES(source)
    `;

    await pool.execute(sql, [email, firstName, lastName, source]);

    return res.json({ ok: true });
  } catch (err) {
    console.error("Mailer subscribe error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

module.exports = router;
