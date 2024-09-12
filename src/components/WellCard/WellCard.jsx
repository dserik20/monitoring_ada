import React, { useState, useContext } from "react";
import styles from "./WellCard.module.css";
import { fetchWellData } from "../../axios/wellService";
import WellPassport from "../WellPassport/WellPassport";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import { WellsABCCOntext } from "../../states/WellsABCContext";

export default function WellCard({
  leftTop,
  rightTop,
  middle,
  leftBottom,
  rightBottom,
}) {
  const { wells, setWellsChart } = useContext(WellsABCCOntext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [well, setWell] = useState(null);

  const location = useLocation();

  const handleClick = async () => {
    if (location.pathname === "/abc") {
      try {
        const response = await fetchWellData(leftTop);
        const data = response.data; // No need to await this, it's already resolved

        const selected = wells.filter((well) => well.well === leftTop);
        if (selected.length > 0) {
          setWellsChart(selected); // Only set chart if well is found
        } else {
          console.warn("No matching well found in wellsChart!");
        }

        setWell(data);

        if (data) {
          setIsModalOpen(true);
        }
      } catch (err) {
        console.error("Error getting well data!", err);
      }
    } else {
      return;
    }
  };

  const percentageDifference = ((middle - rightTop) / middle) * 100;

  let cardColorClass = styles.grayCard;
  if (percentageDifference > 15 && percentageDifference <= 30) {
    cardColorClass = styles.orangeCard;
  } else if (percentageDifference < -30) {
    cardColorClass = styles.redCard;
  }

  const cardClasses = `${styles.wellCard} ${cardColorClass}`;

  return (
    <>
      <div className={cardClasses} onClick={handleClick}>
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
      {isModalOpen && well && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <WellPassport well={well} />
        </Modal>
      )}
    </>
  );
}
