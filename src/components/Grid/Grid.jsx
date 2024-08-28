import React from "react";
import styles from "./Grid.module.css";
import WellCard from "../WellCard/WellCard.jsx";

export default function Grid({ wells, fieldMappings }) {
  return (
    <div className={styles.gridContainer}>
      {wells.map((well, index) => (
        <WellCard
          key={index}
          leftTop={well[fieldMappings.leftTop]}
          rightTop={well[fieldMappings.rightTop]}
          middle={well[fieldMappings.middle]}
          leftBottom={well[fieldMappings.leftBottom]}
          rightBottom={well[fieldMappings.rightBottom]}
        />
      ))}
    </div>
  );
}
