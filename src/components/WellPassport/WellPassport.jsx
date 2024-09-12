import React from "react";
import styles from "./WellPassport.module.css";

export default function WellPassport({ well }) {
  // Extracting the well name to display it separately
  const wellName = well["Скважина"];

  // Adding the well name back to the object so it can be displayed in the table
  const wellData = Object.entries(well[0]);

  return (
    <div className={styles.tableContainer}>
      <h2>Карточка скважины</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Карточка скважины</th>
            <th>Данные</th>
          </tr>
        </thead>
        <tbody>
          {wellData.map((entry, index) => (
            <tr key={index}>
              <td>{entry[0]}</td>
              <td>{entry[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
