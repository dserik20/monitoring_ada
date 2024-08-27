import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

const data = [
  {
    name: "QH0",
    Δ: 72.4,
    pv: 0,
  },
  {
    name: "ΔQH(t)",
    Δ: -9.8,
    pv: 72.4,
  },
  {
    name: "ΔQH(N)",
    Δ: -13.4,
    pv: 62.6, // Previous Δ + pv
  },
  {
    name: "ΔQH(qж)",
    Δ: 3.0,
    pv: 49.2, // Previous Δ + pv
  },
  {
    name: "QH1",
    Δ: 52.2, // Final value
    pv: 0, // Previous Δ + pv
  },
];

export default function OilLossChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" fillOpacity={0.1} />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="pv" stackId="a" fill="transparent" />
      <Bar dataKey="Δ" stackId="a">
        {data.map((item, index) => {
          const isDefaultColor = index === 0 || index === data.length - 1;
          return (
            <Cell
              key={`cell-${index}`}
              fill={
                isDefaultColor ? "#8884d8" : item.Δ < 0 ? "#B22222" : "#228B22"
              }
            />
          );
        })}
        <LabelList
          dataKey="Δ"
          position="top"
          formatter={(value) => value.toFixed(1)}
          fill="#fff"
        />
      </Bar>
    </BarChart>
  );
}
