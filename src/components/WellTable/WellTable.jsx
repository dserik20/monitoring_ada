import React from "react";
import styles from "./WellTable.module.css";

export default function WellTable({ wells, setSelectedWell }) {
  const handleWellClick = (wellName) => {
    const filteredWells = wells.filter((well) => well.well === wellName);
    setSelectedWell(filteredWells);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Скважина</th>
            <th>Замер Qж</th>
            <th>Пред Qж</th>
            <th>Нефть Qж</th>
            <th>Пред Qн</th>
            <th>обводн.</th>
            <th>Прел. обв.</th>
            <th>Тех. реж. обв.</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {wells.map((well, index) => (
            <tr key={index} onClick={() => handleWellClick(well.well)}>
              <td>{well.well}</td>
              <td>{well.tm_fluid.toFixed(2)}</td>
              <td>{well.tm_fluid_prev.toFixed(2)}</td>
              <td>{well.tm_oil.toFixed(2)}</td>
              <td>{well.tm_oil_prev.toFixed(2)}</td>
              <td>{well.tm_water.toFixed(2)}</td>
              <td>{well.tm_water_prev.toFixed(2)}</td>
              <td>{well.tr_water.toFixed(2)}</td>
              <td>{formatDate(well.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
