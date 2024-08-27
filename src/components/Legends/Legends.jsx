import React from "react";
import styles from "./Legends.module.css"; // Import the CSS module

export default function Legends() {
  return (
    <div className={styles.legendsContainer}>
      <div className={styles.legendsSection}>
        <p className={styles.legendsText}>Номер скважины (XXX_xxxx)</p>
        <p className={styles.legendsText}>Тех. режим по нефти (т/сут)</p>
      </div>
      <div className={styles.legendsDivider}></div> {/* Divider */}
      <div className={styles.legendsSection}>
        <p className={styles.legendsText}>Замер по ТМ</p>
      </div>
      <div className={styles.legendsDivider}></div> {/* Divider */}
      <div className={styles.legendsSection}>
        <p className={styles.legendsText}>Тех. режим по жидкости (м3/сут)</p>
        <p className={styles.legendsText}>Обводненность(%)</p>
      </div>
    </div>
  );
}
