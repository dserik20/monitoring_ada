import React from "react";
import styles from "./WellTable.module.css";

export default function WellTable() {
  // Sample well data
  const wellData = [
    {
      wellId: "BSK_0001",
      depth: "3000m",
      flowRate: "500 m³/d",
      pressure: "1500 psi",
      temperature: "90°C",
      status: "Active",
    },
    {
      wellId: "BSK_0002",
      depth: "3200m",
      flowRate: "450 m³/d",
      pressure: "1400 psi",
      temperature: "88°C",
      status: "Active",
    },
    {
      wellId: "BSK_0003",
      depth: "2800m",
      flowRate: "600 m³/d",
      pressure: "1600 psi",
      temperature: "92°C",
      status: "Inactive",
    },
    {
      wellId: "BSK_0004",
      depth: "3100m",
      flowRate: "520 m³/d",
      pressure: "1550 psi",
      temperature: "85°C",
      status: "Active",
    },
    {
      wellId: "BSK_0005",
      depth: "2900m",
      flowRate: "470 m³/d",
      pressure: "1450 psi",
      temperature: "87°C",
      status: "Inactive",
    },
    {
      wellId: "BSK_0006",
      depth: "3050m",
      flowRate: "510 m³/d",
      pressure: "1520 psi",
      temperature: "89°C",
      status: "Active",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Well ID</th>
            <th>Depth</th>
            <th>Flow Rate</th>
            <th>Pressure</th>
            <th>Temperature</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {wellData.map((well, index) => (
            <tr key={index}>
              <td>{well.wellId}</td>
              <td>{well.depth}</td>
              <td>{well.flowRate}</td>
              <td>{well.pressure}</td>
              <td>{well.temperature}</td>
              <td>{well.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
