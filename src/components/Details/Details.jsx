import React from "react";
import styles from "./Details.module.css";

export default function Details({
  leftTop,
  rightTop,
  leftBottom,
  rightBottom,
}) {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.row}>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "orange" }}
          ></div>{" "}
          <p className={styles.text}>{leftTop}</p>
        </div>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "green" }}
          ></div>{" "}
          <p className={styles.text}>{rightTop}</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.textWithRect}>
          <div className={styles.rect} style={{ backgroundColor: "red" }}></div>
          <p className={styles.text}>{leftBottom}</p>
        </div>
        <div className={styles.textWithRect}>
          <div
            className={styles.rect}
            style={{ backgroundColor: "gray" }}
          ></div>{" "}
          <p className={styles.text}>{rightBottom}</p>
        </div>
      </div>
    </div>
  );
}
