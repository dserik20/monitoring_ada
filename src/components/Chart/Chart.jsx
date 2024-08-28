import React, { useState, useEffect, useMemo } from "react";
import { fetch2Hours } from "../../axios/wellService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./Chart.module.css";

// Define the x-axis labels as a constant
const xLabels = [
  "02",
  "04",
  "06",
  "08",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "00",
  "01:59",
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className={`${styles.tooltipItem} ${
              entry.name === "Дебит за предыдущие сутки"
                ? styles.tooltipGray
                : entry.name === "Дебит по тех.режиму"
                ? styles.tooltipRed
                : styles.tooltipGreen
            }`}
          >
            {`${entry.value.toLocaleString("ru-RU")}`}
          </div>
        ))}
        <div className={styles.tooltipDate}>28.04.2024</div>
      </div>
    );
  }

  return null;
};

export default function Chart() {
  const [isNak, setNak] = useState(true);
  const [type, setType] = useState("liquid");
  const [data, setData] = useState({
    liquid: [],
    oil: [],
  });

  useEffect(() => {
    fetch2Hours()
      .then((response) => {
        const fetchedData = response.data;

        const formattedData = xLabels.map((label, index) => ({
          name: label,
          debit_last_day: Math.floor(fetchedData[index]?.debit_last_day || 0),
          tech_rezh: Math.floor(fetchedData[index]?.tech_rezh || 0),
          curr_debit: Math.floor(fetchedData[index]?.current_debit || 0),
          debit_last_day_nak: Math.floor(
            fetchedData[index]?.debit_last_day_nak || 0
          ),
          tech_rezh_nak: Math.floor(fetchedData[index]?.tech_rezh_nak || 0),
          curr_debit_nak: Math.floor(
            fetchedData[index]?.current_debit_nak || 0
          ),
          n_debit_last_day: Math.floor(
            fetchedData[index]?.n_debit_last_day || 0
          ),
          n_tech_rezh: Math.floor(fetchedData[index]?.n_tech_rezh || 0),
          n_curr_debit: Math.floor(fetchedData[index]?.n_current_debit || 0),
          n_debit_last_day_nak: Math.floor(
            fetchedData[index]?.n_debit_last_day_nak || 0
          ),
          n_tech_rezh_nak: Math.floor(fetchedData[index]?.n_tech_rezh_nak || 0),
          n_curr_debit_nak: Math.floor(
            fetchedData[index]?.n_current_debit_nak || 0
          ),
        }));

        const liquidData = formattedData.map((item) => ({
          name: item.name,
          debit_last_day: item.debit_last_day,
          tech_rezh: item.tech_rezh,
          curr_debit: item.curr_debit,
          debit_last_day_nak: item.debit_last_day_nak,
          tech_rezh_nak: item.tech_rezh_nak,
          curr_debit_nak: item.curr_debit_nak,
        }));

        const oilData = formattedData.map((item) => ({
          name: item.name,
          debit_last_day: item.n_debit_last_day,
          tech_rezh: item.n_tech_rezh,
          curr_debit: item.n_curr_debit,
          debit_last_day_nak: item.n_debit_last_day_nak,
          tech_rezh_nak: item.n_tech_rezh_nak,
          curr_debit_nak: item.n_curr_debit_nak,
        }));

        setData({ liquid: liquidData, oil: oilData });
      })
      .catch((error) => {
        console.error("There was an error fetching the wells!", error);
      });
  }, []);

  const handleNakChange = (event) => {
    setNak(event.target.checked);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const selectedData = useMemo(() => {
    return isNak
      ? data[type].map((item) => ({ ...item, isNak: true }))
      : data[type];
  }, [data, type, isNak]);

  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        <input type="checkbox" checked={isNak} onChange={handleNakChange} />
        <label htmlFor="cumulative">Показать с накоплением</label>
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
        <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
        <YAxis tick={{ fill: "#ffffff" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey={isNak ? "tech_rezh_nak" : "tech_rezh"}
          name="Дебит по тех.режиму"
          stroke="#B22222"
          strokeDasharray="5 5"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={isNak ? "debit_last_day_nak" : "debit_last_day"}
          name="Дебит за предыдущие сутки"
          stroke="#888888"
          strokeDasharray="3 4 5 2"
        />
        <Line
          type="monotone"
          dataKey={isNak ? "curr_debit_nak" : "curr_debit"}
          name="Прогнозируемый дебит на конец суток"
          stroke="#228B22"
        />
      </LineChart>
    </div>
  );
}
