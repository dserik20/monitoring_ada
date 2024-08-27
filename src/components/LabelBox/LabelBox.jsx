import React from "react";
import styles from "./LabelBox.module.css";

export default function LabelBox({ label, width, height, fontSize }) {
  return (
    <div
      className={styles.labelContainer}
      style={{ width: width, height: height, fontSize: fontSize }}
    >
      {label}
    </div>
  );
}
