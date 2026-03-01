require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the server" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
