import React from "react";
import styles from "./WellCard.module.css";

export default function WellCard({
  leftTop,
  rightTop,
  middle,
  leftBottom,
  rightBottom,
}) {
  const percentageDifference = ((middle - rightTop) / middle) * 100;

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
        <span>{leftTop}</span>
        <span>{rightTop.toFixed(2)}</span>
      </div>
      <h3 className={styles.cardHeader}>{middle.toFixed(1)}</h3>
      <div className={styles.cardRow}>
        <span>{leftBottom.toFixed(1)}</span>
        <span>{rightBottom.toFixed(1)}</span>
      </div>
    </div>
  );
}
