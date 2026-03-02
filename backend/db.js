require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

let sslConfig;

try {
  if (process.env.DB_SSL_CA_PATH) {
    const caPath = path.resolve(process.env.DB_SSL_CA_PATH);
    const ca = fs.readFileSync(caPath);

    sslConfig = { ca };
    console.log("Using SSL with CA certificate.");
  } else {
    throw new Error("DB_SSL_CA_PATH not set");
  }
} catch (err) {
  console.warn(
    "Could not load CA file. Falling back to insecure SSL (dev only).",
  );
  sslConfig = { rejectUnauthorized: false };
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306),
  ssl: sslConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
