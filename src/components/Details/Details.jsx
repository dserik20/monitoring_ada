import React from "react";
import styles from "./Details.module.css";

export default function Details() {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.row}>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "orange" }}
          ></div>{" "}
          <p className={styles.text}>-30% откл. от ТР</p>
        </div>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "green" }}
          ></div>{" "}
          <p className={styles.text}>15% прев. над ТР</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.textWithRect}>
          <div className={styles.rect} style={{ backgroundColor: "red" }}></div>
          <p className={styles.text}>скв. остановлена</p>
        </div>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "gray" }}
          ></div>{" "}
          <p className={styles.text}>в пределах нормы</p>
        </div>
      </div>
    </div>
  );
}
