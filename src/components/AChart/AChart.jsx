import React, { useState, useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./AChart.module.css";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className={`${styles.tooltipItem} ${
              entry.name === "Обводненность"
                ? styles.tooltipGray
                : entry.name === "Тех.режим обводненности"
                ? styles.tooltipRed
                : styles.tooltipGreen
            }`}
          >
            {`${entry.value.toLocaleString("ru-RU")}`}
          </div>
        ))}
        <div className={styles.tooltipDate}>{label}</div>
      </div>
    );
  }

  return null;
};

export default function AChart({ selectedWell }) {
  const [type, setType] = useState("liquid");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectedWell) {
      const formattedData = selectedWell.map((well) => ({
        date: new Date(well.date).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        tr_water: Math.floor(well.tr_water || 0),
        tm_fluid: Math.floor(well.tm_fluid || 0),
        tm_oil: Math.floor(well.tm_oil || 0),
        tm_water: Math.floor(well.tm_water || 0),
      }));

      setData(formattedData);
    }
  }, [selectedWell]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const selectedData = useMemo(() => {
    return data.map((item) => ({
      date: item.date,
      tm_fluid: item.tm_fluid,
      tm_oil: item.tm_oil,
      tr_water: item.tr_water,
      tm_water: item.tm_water,
    }));
  }, [data]);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="radio"
          id="liquid"
          name="type"
          value="liquid"
          checked={type === "liquid"}
          onChange={handleTypeChange}
        />
        <label htmlFor="liquid">Жидкость</label>
        <span>/</span>
        <input
          type="radio"
          id="oil"
          name="type"
          value="oil"
          checked={type === "oil"}
          onChange={handleTypeChange}
        />
        <label htmlFor="oil">Нефть</label>
      </div>
      <LineChart
        width={600}
        height={350}
        data={selectedData}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="date" tick={{ fill: "#ffffff" }} />
        <YAxis tick={{ fill: "#ffffff" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{
            position: "relative",
            bottom: 30,
          }}
        />
        <Line
          type="monotone"
          dataKey={type === "liquid" ? "tm_fluid" : "tm_oil"}
          name={type === "liquid" ? "Жидкость" : "Нефть"}
          stroke="#228B22" // Green
        />
        <Line
          type="monotone"
          dataKey="tr_water"
          name="Тех.режим обводненности"
          stroke="#B22222" // Red
          strokeDasharray="5 5"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="tm_water"
          name="Обводненность"
          stroke="#888888" // Gray
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
    </div>
  );
}
