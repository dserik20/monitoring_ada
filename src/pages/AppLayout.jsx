import React from "react";
import styles from "./AppLayout.module.css";
import Chart from "../components/Chart/Chart";
import Grid from "../components/Grid/Grid";
import AppNav from "../components/AppNav/AppNav";
import Legends from "../components/Legends/Legends";
import Details from "../components/Details/Details";
import SelectFond from "../components/SelectFond/SelectFond";
import OilLoss from "../components/Oilloss";
import AGZU from "../components/AGZU/AGZU";
import VRP from "../components/VRP/VRP";

export default function AppLayout() {
  const [fond, setFond] = React.useState(0);

  return (
    <div className={styles.app}>
      <AppNav />
      <div className={styles.gridContainer}>
        <div className={styles.chartContainer}>
          <Chart />
        </div>
        <div className={styles.oilLossContainer}>
          <OilLoss />
        </div>
        <div className={styles.gridAndDetailsContainer}>
          <div className={styles.legendsAndDetailsContainer}>
            <Legends />
            <div className={styles.detailsContainer}>
              <SelectFond setFond={setFond} />
              <Details />
            </div>
          </div>
          <Grid />
        </div>
        <div className={styles.agzuContainer}>
          {fond === 0 ? <AGZU /> : <VRP />}
        </div>
      </div>
    </div>
  );
}
