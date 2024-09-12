import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "QH0", value: 72.4 },
  { name: "ΔQH(t)", value: -9.8 },
  { name: "ΔQH(N)", value: -13.4 },
  { name: "ΔQH(qж)", value: 3.0 },
  { name: "QH1", value: 52.2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function OilLossPieChart() {
  return (
    <PieChart width={600} height={400}>
      <Tooltip />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label={({ name, value }) => `${name}: ${value.toFixed(1)}`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
