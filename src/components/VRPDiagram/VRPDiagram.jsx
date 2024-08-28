import React from "react";
import styles from "./VRPDiagram.module.css";
import SchemeAGZU from "../../data/Diagrams/SchemeAGZU.svg";
import Box from "../Box/Box";

export default function VRPDiagram() {
  return (
    <div className={styles.container}>
      <img src={SchemeAGZU} alt="Diagram" className={styles.svgImage} />
      <div className={styles.overlay}>
        <Box boxText1="BSK_0123" boxText2="0.00" top={65} left={6} number={1} />

        <Box
          boxText1="BSK_0060"
          boxText2="12.00"
          top={65}
          left={206}
          number={3}
        />

        <Box
          boxText1="BSK_0110"
          boxText2="47.00"
          top={65}
          left={406}
          number={5}
        />

        <Box
          boxText1="BSK_0110"
          boxText2="47.00"
          top={65}
          left={606}
          number={7}
        />

        <Box
          boxText1="BSK_0105"
          boxText2="24.02"
          top={267}
          left={6}
          number={8}
        />

        <Box
          boxText1="BSK_0128"
          boxText2="26.00"
          top={267}
          left={206}
          number={10}
        />

        <Box
          boxText1="BSK_0106"
          boxText2="9.57"
          top={267}
          left={406}
          number={12}
        />

        <Box
          boxText1="BSK_0106"
          boxText2="9.57"
          top={267}
          left={606}
          number={14}
        />

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
