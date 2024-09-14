const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = 3000;

const app = express();

app.use(cors());

// MySQL database connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ada",
});

// API routes
app.get("/api/wells", (req, res) => {
  const query = `SELECT * FROM n_well_matrix WHERE well LIKE 'BSK%';`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results || []); // Return the data as JSON
  });
});

app.get("/api/2hours", (req, res) => {
  const query = `
    SELECT current_debit, tech_rezh, debit_last_day, current_debit_nak, tech_rezh_nak, debit_last_day_nak,
           n_current_debit, n_tech_rezh, n_debit_last_day, n_current_debit_nak, n_tech_rezh_nak, n_debit_last_day_nak FROM n_2hour 
    WHERE oil_field LIKE 'BSK%';
  `;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results || []); // Return the data as JSON
  });
});

app.get("/api/wells/abc", (req, res) => {
  const query = `SELECT * FROM abc_data;`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results || []); // Return the data as JSON
  });
});

app.get("/api/well/data", (req, res) => {
  const wellName = req.query.well;
  if (!wellName) {
    return res.status(400).json({ error: "Well name is required" });
  }

  const query = `
    SELECT 
      well AS 'Скважина',
      field AS 'Месторождение',
      date_entry AS 'Дата ввода в эксплуатацию',
      object_exploitation AS 'Объект эксплуатации',
      gzu AS 'ГЗУ',
      way_exploitation AS 'Способ эксплуатации',
      coordinates_x AS 'Координаты X',
      coordinates_y AS 'Координаты Y',
      zaboi AS 'Глубина забоя',
      perforation_interval AS 'Интервал перфорации',
      agzu AS 'АГЗУ',
      otvod AS 'Отвод'
    FROM 
     well_data 
    WHERE well = '${wellName}';
  `;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results || []); // Return the data as JSON
  });
});

app.get("/api/well/last10", (req, res) => {
  const query = `
    SELECT well AS 'Скважина', 
           start_date AS 'Дата начало', 
           end_date AS 'Дата конца', 
           work AS 'Вид ремонта' 
    FROM n_last10 
    ORDER BY id DESC 
    LIMIT 10;
  `;
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results || []); // Return the data as JSON
  });
});

app.use(express.static(path.join(__dirname, "../../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://26.110.70.236:${port}`);
});
