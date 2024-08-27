import React from "react";
import styles from "./DataDisplay.module.css";
import PumpIcon from "../../assets/hb1.png";

export default function DataDisplay({ label, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={PumpIcon} alt="Icon" className={styles.icon} />
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
