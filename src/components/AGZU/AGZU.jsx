import React, { useState } from "react";
import styles from "./AGZU.module.css";
import AgzuDiagram from "../AgzuDiagram/AgzuDiagram";

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

export default function AGZU({ wells }) {
  const [activeButton, setActiveButton] = useState("АГЗУ-1");

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const filteredWells = wells.filter((well) => well.agzu === activeButton);
  // filteredWells.map((well) => console.log(well));

  return (
    <div className={styles.upperDiv}>
      <div className={styles.container}>
        <Button
          label="АГЗУ-1"
          active={activeButton === "АГЗУ-1"}
          onClick={() => handleButtonClick("АГЗУ-1")}
        />
        <Button
          label="АГЗУ-2"
          active={activeButton === "АГЗУ-2"}
          onClick={() => handleButtonClick("АГЗУ-2")}
        />
        <Button
          label="АГЗУ-3"
          active={activeButton === "АГЗУ-3"}
          onClick={() => handleButtonClick("АГЗУ-3")}
        />
        <Button
          label="АГЗУ-4"
          active={activeButton === "АГЗУ-4"}
          onClick={() => handleButtonClick("АГЗУ-4")}
        />
        <Button
          label="МФ-1"
          active={activeButton === "МФ-1"}
          onClick={() => handleButtonClick("МФ-1")}
        />
        <Button
          label="МФ-2"
          active={activeButton === "МФ-2"}
          onClick={() => handleButtonClick("МФ-2")}
        />
        <Button
          label="МФ-4"
          active={activeButton === "МФ-4"}
          onClick={() => handleButtonClick("МФ-4")}
        />
      </div>
      <AgzuDiagram filteredWells={filteredWells} />
    </div>
  );
}
