import React from "react";
import OilLossChart from "./OilLossChart";
import OilLossTable from "./OilLossTable";

export default function OilLoss() {
  return (
    <div style={{ width: "100%" }}>
      <h5>Выбранный период: </h5>
      <OilLossChart />
      {/* <OilLossTable /> */}
    </div>
  );
}
