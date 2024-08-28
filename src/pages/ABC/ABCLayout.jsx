import React from "react";
import AppNav from "../../components/AppNav/AppNav";
import Legends from "../../components/Legends/Legends";
import Details from "../../components/Details/Details";
import SelectFond from "../../components/SelectFond/SelectFond";
import Grid from "../../components/Grid/Grid";
import AGZU from "../../components/AGZU/AGZU";
import VRP from "../../components/VRP/VRP";
import styles from "./ABCLayout.module.css";
import ABCChart from "../../components/ABCChart/ABCChart";
import WellTable from "../../components/WellTable/WellTable";

export default function ABCLayout() {
  const [fond, setFond] = React.useState(0);

  return (
    <div className={styles.app}>
      <AppNav />
      <div className={styles.gridContainer}>
        <div className={styles.chartContainer}>
          <ABCChart />
        </div>
        <div className={styles.graphContainer}>
          <WellTable />
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
        <div className={styles.wellTableContainer}>{<WellTable />}</div>
      </div>
    </div>
  );
}
