import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "QH0", cumulative: 72.4 },
  { name: "ΔQH(t)", cumulative: 62.6 },
  { name: "ΔQH(N)", cumulative: 49.2 },
  { name: "ΔQH(qж)", cumulative: 52.2 },
  { name: "QH1", cumulative: 52.2 },
];

export default function LossCumilative() {
  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="cumulative" stroke="#8884d8" />
    </LineChart>
  );
}
