import React, { useState } from "react";
import styles from "./VRP.module.css";
import VRPDiagram from "../VRPDiagram/VRPDiagram";

function Button({ label, active, onClick }) {
  return (
    <div
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default function VRP() {
  const [activeButton, setActiveButton] = useState("ВРП-1");

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className={styles.upperDiv}>
      <div className={styles.container}>
        <Button
          label="ВРП-1"
          active={activeButton === "ВРП-1"}
          onClick={() => handleButtonClick("ВРП-1")}
        />
        <Button
          label="ВРП-2"
          active={activeButton === "ВРП-2"}
          onClick={() => handleButtonClick("ВРП-2")}
        />
        <Button
          label="ВРП-3"
          active={activeButton === "ВРП-3"}
          onClick={() => handleButtonClick("ВРП-3")}
        />
      </div>
      <VRPDiagram />
    </div>
  );
}
