import React from "react";
import styles from "./Grid.module.css";
import WellCard from "../WellCard/WellCard.jsx";

export default function Grid({ wells, fieldMappings, calculateMiddleValue }) {
  return (
    <div className={styles.gridContainer}>
      {wells.map((well, index) => {
        const leftBottomValue = well[fieldMappings.leftBottom];
        const rightTopValue = well[fieldMappings.rightTop];
        const middleValue = calculateMiddleValue
          ? calculateMiddleValue(rightTopValue, leftBottomValue)
          : well[fieldMappings.middle];

        return (
          <WellCard
            key={index}
            leftTop={well[fieldMappings.leftTop]}
            rightTop={rightTopValue}
            middle={middleValue}
            leftBottom={leftBottomValue}
            rightBottom={well[fieldMappings.rightBottom]}
          />
        );
      })}
    </div>
  );
}
