require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mailerRoutes = require("./routes/mailer");
const eventRoutes = require("./routes/events");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/mailer", mailerRoutes);
app.use("/api/events", eventRoutes);

app.get("/", (req, res) => {
  res.json({ mssg: "if you see this, then you are talking to me." });
});

const { pool } = require("./db");

app.get("/debug/db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: true, rows });
  } catch (err) {
    console.error("DB DEBUG ERROR:", err);
    res.status(500).json({
      ok: false,
      code: err.code,
      message: err.sqlMessage || err.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
