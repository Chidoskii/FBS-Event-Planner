const express = require("express");

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

module.exports = router;
