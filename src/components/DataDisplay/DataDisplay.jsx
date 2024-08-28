import React, { useState } from "react";
import styles from "./DataDisplay.module.css";
import PumpIcon from "../../assets/hb1.png";
import Modal from "../Modal/Modal";
import ResponsiveTable from "../ResponsiveTable/ResponsiveTable";

export default function DataDisplay({
  label,
  value,
  onClick,
  clickable = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = async () => {
    if (!clickable) return;

    if (onClick) {
      try {
        const data = await onClick(); // Execute the passed function to fetch data
        setData(data);
        setIsModalOpen(true); // Open the modal
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div
        className={styles.container}
        onClick={handleClick}
        style={{ cursor: clickable ? "pointer" : "default" }}
      >
        <div className={styles.iconContainer}>
          <img src={PumpIcon} alt="Icon" className={styles.icon} />
        </div>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ResponsiveTable data={data} />
        </Modal>
      )}
    </>
  );
}
