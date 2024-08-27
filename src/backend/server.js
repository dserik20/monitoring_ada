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
    SELECT well, tr_fluid, tr_oil, tr_water, ecn_status, fon_fluid, fon_oil, zamer
FROM n_well_matrix 
WHERE well LIKE 'BSK%';
`;

  connection.query(query, [fieldId, wellType], (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
