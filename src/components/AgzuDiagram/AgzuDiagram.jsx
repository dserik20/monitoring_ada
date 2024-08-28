import React from "react";
import styles from "./AgzuDiagram.module.css";
import SchemeAGZU from "../../data/Diagrams/SchemeAGZU.svg";
import Box from "../Box/Box"; // Import the Box component

export default function AgzuDiagram({ filteredWells }) {
  const boxes = new Array(14).fill(null);

  filteredWells.forEach((well) => {
    boxes[well.otvod - 1] = well; // otvod values are 1-based, so subtract 1
  });

  return (
    <div className={styles.container}>
      <img src={SchemeAGZU} alt="Diagram" className={styles.svgImage} />
      <div className={styles.overlay}>
        {boxes.map((well, index) => (
          <Box
            key={index}
            boxText1={well?.well || ""}
            boxText2={well?.tr_fluid?.toFixed(2) || ""}
            top={index < 7 ? 65 : 275} // Adjust top based on index (first 7 on top row, next 7 on bottom row)
            left={6 + (index % 7) * 100} // Distribute evenly across the width
            number={index + 1} // Box number (1-based index)
          />
        ))}

        {/* Central circle */}
        <div className={styles.circle} style={{ top: "165px", left: "303px" }}>
          <div className={styles.circleText}>0 М³/СУТ</div>
          <div className={styles.circleSubText}>0 мПа</div>
        </div>

        <div
          className={styles.line}
          style={{ top: "208px", left: "403px" }}
        ></div>
        <Box boxText1="на ППН" top={188} left={600} />
      </div>
    </div>
  );
}
