import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

const uData = [
  1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000,
];
const pData = [
  900, 1400, 1900, 2400, 2900, 3400, 3900, 4400, 4900, 5400, 5900, 6400, 6900,
];
const qData = [
  1100, 1600, 2100, 2600, 3100, 3600, 4100, 4600, 5100, 5600, 6100, 6600, 7100,
];

const data = xLabels.map((label, index) => ({
  name: label,
  uv: uData[index],
  pv: pData[index],
  qv: qData[index],
}));

export default function Chart() {
  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        <input type="checkbox" label="cumulative" />
        <label for="cumulative">Показать с накоплением</label>
        <input type="radio" id="liquid" name="liquid" value="liquid" />
        <label for="liquid">Жидкость</label>
        <span>/</span>
        <input type="radio" id="oil" name="oil" value="oil" />
        <label for="liquid">Нефть</label>
      </div>
      <LineChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
        <YAxis tick={{ fill: "#ffffff" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          name="Дебит по тех.режиму"
          stroke="#B22222"
          strokeDasharray="5 5"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          name="Дебит за предыдущие сутки"
          stroke="#888888"
          strokeDasharray="3 4 5 2"
        />
        <Line
          type="monotone"
          dataKey="qv"
          name="Прогнозируемый дебит на конец суток"
          stroke="#228B22"
        />
      </LineChart>
    </div>
  );
}
