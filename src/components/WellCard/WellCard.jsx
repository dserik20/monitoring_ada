import React from "react";
import styles from "./WellCard.module.css";

export default function WellCard({
  well,
  tr_fluid,
  zamer,
  tr_oil,
  tr_water,
  status,
}) {
  const cardClasses = `${styles.wellCard} ${
    status === "red" ? styles.redCard : ""
  }`;

  return (
    <div className={cardClasses} style={{ backgroundColor: status }}>
      <div className={styles.cardRow}>
        <span>{well}</span>
        <span>{tr_fluid}</span>
      </div>
      <h3 className={styles.cardHeader}>{zamer.toFixed(1)}</h3>
      <div className={styles.cardRow}>
        <span>{tr_oil}</span>
        <span>{tr_water}</span>
      </div>
    </div>
  );
}
