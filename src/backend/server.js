const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ada",
});

app.get("/api/wells", (req, res) => {
  const wellType = req.query.wellType || "production";
  const fieldId = req.query.fieldId || 1;

  const query = `
    SELECT * FROM n_well_matrix WHERE well LIKE 'BSK%';
`;

  connection.query(query, [fieldId, wellType], (error, results) => {
    if (error) throw error;
    res.json(results);
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
    res.json(results);
  });
});

app.get("/api/wells/abc", (req, res) => {
  const query = `
    SELECT * from abc_data;
  `;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/well/data", (req, res) => {
  const query = `
    SELECT * FROM well_data WHERE well='';
  `;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/well/last10", (req, res) => {
  const query = `
    SELECT well AS 'Скважина', 
           start_date AS 'Дата начало', 
           end_date AS 'Дата конца', 
           work AS 'Вид ремонта' 
    FROM n_last10 
    WHERE well LIKE 'UAZ%' 
    ORDER BY id DESC 
    LIMIT 10;
  `;

  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

app.get("/api/well/data", (req, res) => {
  // Get the well name from the query string
  const wellName = req.query.well;

  // Ensure wellName exists and matches the acceptable format BSK_0002 to BSK_0114
  if (!wellName || !/^BSK_0(0[0-9]|1[0-4])$/.test(wellName)) {
    return res.status(400).json({ error: "Invalid well name provided" });
  }

  // Convert well name to the required format (K_002 to K_114)
  const wellNumber = wellName.slice(4); // Extract the numerical part, e.g., 0002 or 0114
  const transformedWellName = `K_${parseInt(wellNumber, 10)}`; // Convert to K_002 or K_114

  // SQL query
  const query = `
    SELECT * FROM well_data WHERE well='${transformedWellName}';
  `;

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
