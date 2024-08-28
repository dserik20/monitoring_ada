import React from "react";
import styles from "./Grid.module.css";
import WellCard from "../WellCard/WellCard.jsx";
// import { useState, useEffect } from "react";
import { cardsData } from "../../data/cardsData.js";

export default function Grid({ wells }) {
  return (
    <div className={styles.gridContainer}>
      {wells.map((well, index) => (
        <WellCard
          key={index}
          well={well.well}
          tr_fluid={well.tr_fluid}
          zamer={well.zamer}
          tr_oil={well.tr_oil}
          tr_water={well.tr_water}
        />
      ))}
    </div>
  );
}
