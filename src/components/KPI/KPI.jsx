import React from "react";
import DataDisplay from "../DataDisplay/DataDisplay";
import styles from "./KPI.module.css";

export default function KPI() {
  return (
    <div className={styles.container}>
      <DataDisplay label="Замерная добыча" value="0.00" />
      <DataDisplay label="Парковая добыча" value="0.00" />
      <DataDisplay label="Коэффициент извлечения" value="0.75" />
      <DataDisplay label="Суточный дебит" value="120.00" />
      <DataDisplay label="Тех.режим по жидкости" value="300.00" />
      <DataDisplay label="Тех.режим по нефти" value="180.00" />
      <DataDisplay label="Обводненность" value="15%" />
      <DataDisplay label="Давление на входе" value="50 мПа" />
    </div>
  );
}
