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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
