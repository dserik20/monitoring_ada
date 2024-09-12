import React, { useState } from "react";
import { fetchLast10Wells } from "../../axios/wellService";
import styles from "./DataDisplay.module.css";
import PumpIcon from "../../assets/hb1.png";
import Modal from "../Modal/Modal";
import ResponsiveTable from "../ResponsiveTable/ResponsiveTable";

export default function DataDisplay({ label, value, clickable = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = async () => {
    if (!clickable) return;
    else {
      try {
        const response = await fetchLast10Wells();
        console.log(response.data);
        setData(response.data);
        setIsModalOpen(true);
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
