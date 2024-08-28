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

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
