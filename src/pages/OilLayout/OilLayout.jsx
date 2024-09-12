import React from "react";
import OilLossChart from "../../components/OilLossChart/OilLossChart";
import OilLossTable from "../../components/OilLossTable";
import AppNav from "../../components/AppNav/AppNav";
import LossCumilative from "../../components/OilLossChart/LossCumilative";
import OilLossPieChart from "../../components/OilLossChart/AreaChart";

export default function OilLayout() {
  return (
    <div style={{ width: "100%" }}>
      <AppNav />
      <h5>Выбранный период: </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "200px",
          alignContent: "center",
        }}
      >
        <OilLossChart />
        <LossCumilative />
      </div>
      <div>
        <OilLossPieChart />
      </div>

      {/* <OilLossTable /> */}
    </div>
  );
}
