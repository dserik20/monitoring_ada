import React from "react";
import styles from "./Table.module.css";

export default function Table({ data }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableBody}>
        {data.map((row, index) => (
          <div className={styles.tableRow} key={index}>
            <div className={styles.tableCell}>{row.value}</div>
            <div className={styles.tableCell}>{row.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
