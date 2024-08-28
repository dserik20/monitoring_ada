const mysql = require("mysql");
const xlsx = require("xlsx");

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

  // Load the Excel file
  const workbook = xlsx.readFile("new.xlsx");

  // Get the sheet named "Июль 2024"
  const sheet_name = "Июль 2024";
  const worksheet = workbook.Sheets[sheet_name];

  // Convert the sheet to JSON without skipping rows
  const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

  // Iterate over each row
  jsonData.forEach((row, index) => {
    // Assuming well_name is in column A (index 0)
    const well_name = row[1];

    // Get the specific columns
    const tr_oil = row[25]; // Column Z is 26th in Excel, index 25 in array (zero-based)
    const tr_fluid = row[26]; // Column AA is 27th in Excel, index 26 in array (zero-based)
    const tr_water = row[29]; // Column AD is 30th in Excel, index 29 in array (zero-based)

    // Check if all three values are not empty
    if (tr_oil && tr_fluid && tr_water) {
      // Format the well name to match the database format (e.g., bsk-2 to BSK_0002)
      const formatted_well_name = `BSK_${well_name
        .toString()
        .toLowerCase()
        .replace("bsk-", "")
        .padStart(4, "0")}`;

      // Print the formatted values
      console.log(
        `Formatted Well Name: ${formatted_well_name}, tr_oil: ${tr_oil}, tr_fluid: ${tr_fluid}, tr_water: ${tr_water}`
      );

      // SQL query to update the table
      const query = `
        UPDATE n_well_matrix
        SET tr_fluid = ?, tr_oil = ?, tr_water = ? 
        WHERE well = ?
      `;

      connection.query(
        query,
        [tr_fluid, tr_oil, tr_water, formatted_well_name],
        (err, result) => {
          if (err) throw err;
          console.log(`Updated well: ${formatted_well_name}`);
        }
      );
    }
  });

  // Close the connection after processing
  connection.end((err) => {
    if (err) throw err;
    console.log("Connection closed.");
  });
});
