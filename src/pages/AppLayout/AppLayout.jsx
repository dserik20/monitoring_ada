import React, { useState, useEffect } from "react";
import { fetchWells } from "../../axios/wellService";
import styles from "./AppLayout.module.css";
import Chart from "../../components/Chart/Chart";
import Grid from "../../components/Grid/Grid";
import AppNav from "../../components/AppNav/AppNav";
import Legends from "../../components/Legends/Legends";
import Details from "../../components/Details/Details";
import SelectFond from "../../components/SelectFond/SelectFond";
import AGZU from "../../components/AGZU/AGZU";
import VRP from "../../components/VRP/VRP";
import KPI from "../../components/KPI/KPI";

export default function AppLayout() {
  const [fond, setFond] = useState(0);
  const [wells, setWells] = useState([]);

  useEffect(() => {
    fetchWells()
      .then((response) => {
        setWells(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wells!", error);
      });
  }, []);

  const fieldMappings = {
    leftTop: "well",
    rightTop: "tr_fluid",
    middle: "zamer",
    leftBottom: "tr_oil",
    rightBottom: "tr_water",
  };

  return (
    <div className={styles.app}>
      <AppNav />
      <div className={styles.mainSection}>
        <div className={styles.row}>
          <div className={styles.container}>
            <Chart />
          </div>
          <div className={styles.container}>
            <KPI />
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.container} ${styles.gridAndDetailsContainer}`}
          >
            <div className={styles.legendsAndDetailsContainer}>
              <Legends
                leftTop={"Номер скважины (XXX_xxxx)"}
                rightTop={"Тех. режим по нефти (т/сут)"}
                middle={"Замер по ТМ"}
                leftBottom={"Тех. режим по жидкости (м3/сут)"}
                rightBottom={"Обводненность(%)"}
              />
              <SelectFond setFond={setFond} />
              <Details
                leftTop={"-30% откл. от ТР"}
                rightTop={"15% прев. над ТР"}
                leftBottom={"более 30%"}
                rightBottom={"в пределах нормы"}
              />
            </div>
            <Grid wells={wells} fieldMappings={fieldMappings} />
          </div>
          <div className={styles.container}>
            {fond === 0 ? <AGZU wells={wells} /> : <VRP />}
          </div>
        </div>
      </div>
    </div>
  );
}
