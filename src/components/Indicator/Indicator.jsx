import React from "react";
import styles from "./Indicator.module.css";

export default function Indicator({ indicatorNumber, indicatorUnits }) {
  return (
    <div className={styles.indicatorContainer}>
      <span className={styles.indicatorBox}>{indicatorNumber}</span>
      <span className={styles.indicatorBox}>{indicatorUnits}</span>
    </div>
  );
}
