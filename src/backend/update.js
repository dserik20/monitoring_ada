const mysql = require("mysql");

// Establishing the database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ada",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");

  const addColumnQuery = `ALTER TABLE well_data ADD COLUMN id INT;`;

  connection.query(addColumnQuery, (err, result) => {
    if (err && err.code !== "ER_DUP_FIELDNAME") throw err; // Ignore error if column already exists
    console.log("Added id column to well_data table.");

    // First query: Initialize the row number variable
    const setRowNumberQuery = `SET @row_number = 0;`;

    connection.query(setRowNumberQuery, (err, result) => {
      if (err) throw err;

      // Second query: Update the id column with sequential values
      const updateIdQuery = `
        UPDATE well_data
        SET id = (@row_number := @row_number + 1)
        ORDER BY well
        LIMIT 83;
      `;

      connection.query(updateIdQuery, (err, result) => {
        if (err) throw err;
        console.log("Updated first 83 rows with sequential IDs.");

        const fetchWellsQuery = `SELECT well FROM n_well_matrix WHERE nagn='0' AND well LIKE 'BSK%' LIMIT 83;`;

        connection.query(fetchWellsQuery, (err, wells) => {
          if (err) throw err;

          if (wells.length === 0) {
            console.log("No wells found to update.");
            connection.end();
            return;
          }

          console.log(`Number of wells found: ${wells.length}`);

          wells.forEach((row, index) => {
            const updateWellDataQuery = `
              UPDATE well_data 
              SET field = 'Башенколь', well = '${row.well}'
              WHERE id = ${index + 1};
            `;

            connection.query(updateWellDataQuery, (err, updateResult) => {
              if (err) throw err;
              console.log(
                `Updated row with id: ${index + 1} to well: ${row.well}`
              );
            });
          });

          connection.end((err) => {
            if (err) throw err;
            console.log("Connection closed.");
          });
        });
      });
    });
  });
});
