import React from "react";
import styles from "./WellCard.module.css";

export default function WellCard({ well, tr_fluid, zamer, tr_oil, tr_water }) {
  const percentageDifference = ((zamer - tr_fluid) / zamer) * 100;

  let cardColorClass = styles.grayCard;
  if (percentageDifference > 15 && percentageDifference <= 30) {
    cardColorClass = styles.orangeCard;
  } else if (percentageDifference < -30) {
    cardColorClass = styles.redCard;
  }

  const cardClasses = `${styles.wellCard} ${cardColorClass}`;

  return (
    <div className={cardClasses}>
      <div className={styles.cardRow}>
        <span>{well}</span>
        <span>{tr_fluid.toFixed(2)}</span>
      </div>
      <h3 className={styles.cardHeader}>{zamer.toFixed(1)}</h3>
      <div className={styles.cardRow}>
        <span>{tr_oil.toFixed(1)}</span>
        <span>{tr_water.toFixed(1)}</span>
      </div>
    </div>
  );
}
