import React from "react";
import styles from "./SimpleTable.module.css";

export default function SimpleTable({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data.map((item, index) => (
          <div key={index} className={styles.row}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
