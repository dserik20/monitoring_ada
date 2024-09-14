import React, { useState, useEffect, useContext } from "react";
import { fetchWellsABC, fetchWellData } from "../../axios/wellService";
import AppNav from "../../components/AppNav/AppNav";
import Legends from "../../components/Legends/Legends";
import Details from "../../components/Details/Details";
import Grid from "../../components/Grid/Grid";
import styles from "./ABCLayout.module.css";
import AmChart from "../../components/AmChart/AmChart";
import WellTable from "../../components/WellTable/WellTable";
import AChart from "../../components/AChart/AChart";
import { WellsABCCOntext } from "../../states/WellsABCContext";

export default function ABCLayout() {
  const {
    wells,
    setWells,
    selectedWell,
    setSelectedWell,
    wellsGrid,
    setWellsGrid,
    wellsChart,
    setWellsChart,
  } = useContext(WellsABCCOntext);

  const fieldMappings = {
    leftTop: "well",
    rightTop: "tm_fluid",
    middle: "tm_fluid",
    leftBottom: "tm_fluid_prev",
    rightBottom: "tm_water",
  };

  const calculateMiddleValue = (rightTop, leftBottom) => {
    return rightTop - leftBottom;
  };

  return (
    <div className={styles.app}>
      <AppNav />
      <div className={styles.mainSection}>
        {/* First Row */}
        <div className={styles.row}>
          <div className={styles.container}>
            <AmChart wellData={wellsChart} />
          </div>
          <div className={styles.containerX}>
            <AChart selectedWell={selectedWell} />
          </div>
        </div>
        {/* Second Row */}
        <div className={styles.row}>
          <div className={styles.container}>
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
            <Grid
              wells={wellsGrid}
              fieldMappings={fieldMappings}
              calculateMiddleValue={calculateMiddleValue}
            />
          </div>
          <div className={`${styles.container} ${styles.wellTableContainer}`}>
            <WellTable wells={wellsGrid} setSelectedWell={setSelectedWell} />
          </div>
        </div>
      </div>
    </div>
  );
}
