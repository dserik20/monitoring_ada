import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ value, maxValue, color, width, height }) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className={styles.container}>
      <div
        className={styles.barContainer}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div
          className={styles.progress}
          style={{ height: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <div
        className={styles.label}
        style={{ bottom: `calc(${percentage}% - 8px)`, left: `${width + 5}px` }}
      >
        {value} см
      </div>
    </div>
  );
}
