import React, { useState, useEffect } from "react";
import { fetchWellsABC } from "../../axios/wellService";
import AppNav from "../../components/AppNav/AppNav";
import Legends from "../../components/Legends/Legends";
import Details from "../../components/Details/Details";
import Grid from "../../components/Grid/Grid";
import styles from "./ABCLayout.module.css";
import AmChart from "../../components/AmChart/AmChart";
import WellTable from "../../components/WellTable/WellTable";
import AChart from "../../components/AChart/AChart";

export default function ABCLayout() {
  const [fond, setFond] = useState(0);
  const [wells, setWells] = useState([]);
  const [selectedWell, setSelectedWell] = useState(null);

  const handleWellClick = (wellName) => {
    const filteredWells = wells.filter((well) => well.well === wellName);
    setSelectedWell(filteredWells);
  };

  useEffect(() => {
    fetchWellsABC()
      .then((response) => {
        setWells(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wells!", error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppNav />
      <div className={styles.gridContainer}>
        <div className={styles.chartContainer}>
          <AmChart />
        </div>
        <div className={styles.graphContainer}>
          <AChart selectedWell={selectedWell} />
        </div>
        <div className={styles.gridAndDetailsContainer}>
          <div className={styles.legendsAndDetailsContainer}>
            <Legends
              leftTop={"Номер скважины"}
              rightTop={"Предыдущий замер"}
              middle={"Разница замера"}
              leftBottom={"Последний замер"}
              rightBottom={"Лаб. обводненность"}
            />
            <Details
              leftTop={"от 20% до 50%"}
              rightTop={"Выше 50%"}
              leftBottom={"Отрицательная разница"}
              rightBottom={"от 0 до 20%"}
            />
          </div>
          {/* <Grid wells={wells} /> */}
        </div>
        <div className={styles.wellTableContainer}>
          <WellTable wells={wells} onWellClick={handleWellClick} />
        </div>
      </div>
    </div>
  );
}
