import React from "react";
import styles from "./Box.module.css";

export default function Box({ boxText1, boxText2, top, left, number }) {
  return (
    <div
      className={styles.boxContainer}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className={styles.box}>
        <div className={styles.boxText}>{boxText1}</div>
        <div className={styles.boxText}>{boxText2}</div>
      </div>
      {number ? <div className={styles.boxNumber}>{number}</div> : null}
    </div>
  );
}
