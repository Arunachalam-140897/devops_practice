const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432
});

app.get("/", async (req, res) => {
  const r = await pool.query("SELECT NOW()");
  res.send("DB time: " + r.rows[0].now);
});

app.listen(3000, () => console.log("API running on 3000"));
