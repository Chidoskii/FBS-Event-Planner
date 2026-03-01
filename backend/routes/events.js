const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all events" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a specific event" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST an event" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE an event" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE an event" });
});

module.exports = router;
