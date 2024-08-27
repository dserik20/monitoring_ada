import React from "react";
import styles from "./AgzuDiagram.module.css";
import SchemeAGZU from "../../data/Diagrams/SchemeAGZU.svg";
import Box from "../Box/Box"; // Import the new Box component

export default function AgzuDiagram() {
  return (
    <div className={styles.container}>
      <img src={SchemeAGZU} alt="Diagram" className={styles.svgImage} />
      <div className={styles.overlay}>
        <Box boxText1="BSK_0123" boxText2="0.00" top={65} left={6} number={1} />
        <Box
          boxText1="BSK_0111"
          boxText2="5.00"
          top={65}
          left={106}
          number={2}
        />
        <Box
          boxText1="BSK_0060"
          boxText2="12.00"
          top={65}
          left={206}
          number={3}
        />
        <Box
          boxText1="BSK_0115"
          boxText2="8.00"
          top={65}
          left={306}
          number={4}
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
          left={506}
          number={6}
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
          boxText1="BSK_0109"
          boxText2="10.63"
          top={267}
          left={106}
          number={9}
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
          left={306}
          number={11}
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
          left={506}
          number={13}
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
      </div>
    </div>
  );
}
