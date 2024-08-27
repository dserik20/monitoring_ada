import React from "react";
import Square from "../Square/Square";
import styles from "./Nasos.module.css";

export default function Nasos({ numberOfSquares, activeIndex, width, height }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {Array.from({ length: numberOfSquares }).map((_, index) => (
          <Square
            key={index}
            isActive={index === activeIndex}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
}
