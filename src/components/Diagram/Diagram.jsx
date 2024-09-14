import React from "react";
import SchemeMain from "../../data/Diagrams/SchemeMain.svg";
import styles from "./Diagram.module.css";
import Indicator from "../Indicator/Indicator";
import LabelBox from "../LabelBox/LabelBox";
import ProgressBar from "../ProgressBar/ProgressBar";
import Nasos from "../Nasosy/Nasos";
import Table from "../Table/Table";
import SimpleTable from "../SimpleTable/SimpleTable";
import AppNav from "../AppNav/AppNav";

export default function Diagram() {
  const tableData = [
    "t вход: 0.0°C",
    "t выход: 0.0°C",
    "p вход: 0.1кг/см²",
    "p выход: 0.0кг/см²",
  ];

  const data = [
    { value: "73.03", unit: "т/ч" },
    { value: "90.50", unit: "м³/ч" },
    { value: "15.51", unit: "°C" },
    { value: "0", unit: "м³" },
    { value: "635 665", unit: "т" },
    { value: "73.13", unit: "%" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <AppNav />
      </div>

      <img src={SchemeMain} alt="Diagram" className={styles.svgImage} />
      <div className={styles.overlay}>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "104px", left: "167px" }}
        >
          КУУГ
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "174px", left: "200px" }}
        >
          <Indicator indicatorNumber={0.0} indicatorUnits={"м3/ч"} />
          <LabelBox label={"Расходомер"} width={30} height={3} fontSize={5} />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "212px", left: "165px" }}
        >
          ЦППГ
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "126px", left: "945px", fontSize: "5px" }}
        >
          ТОО "KEN INTERNATIONAL"
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "101px", left: "1250px" }}
        >
          <LabelBox
            label={"Узел отчета"}
            width={130}
            height={5}
            fontSize={10}
          />
          <Table data={data} />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "421px", left: "818px" }}
        >
          <SimpleTable data={tableData} />
          <LabelBox label={"Печь"} width={103} height={5} fontSize={10} />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "174px", left: "320px" }}
        >
          <Indicator indicatorNumber={0.0} indicatorUnits={"м3/ч"} />
          <LabelBox label={"Расходомер"} width={30} height={3} fontSize={5} />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "146px", left: "595px" }}
        >
          <Nasos numberOfSquares={2} activeIndex={0} width={60} height={50} />
          <LabelBox
            label={"Насосная циркуляция нефти"}
            width={101}
            height={10}
            fontSize={7}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "421px", left: "565px" }}
        >
          <Nasos numberOfSquares={2} activeIndex={0} width={60} height={50} />
          <LabelBox
            label={"Насосная перекачка нефти"}
            width={101}
            height={10}
            fontSize={7}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "311px", left: "1086px" }}
        >
          <Nasos numberOfSquares={2} activeIndex={0} width={60} height={50} />
          <LabelBox
            label={"Насосная циркуляция воды"}
            width={101}
            height={8}
            fontSize={7}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "503px", left: "1235px" }}
        >
          <Nasos numberOfSquares={4} activeIndex={0} width={30} height={30} />
          <LabelBox
            label={"Насосная пожаротушения"}
            width={105}
            height={3}
            fontSize={8}
          />
        </div>

        {/* Скважины слева */}
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "202px", left: "892px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc1L"}
            value={50}
            maxValue={100}
            color={"#8d730e"}
            width={9}
            height={64}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "202px", left: "1077px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc3L"}
            value={50}
            maxValue={100}
            color={"#8d730e"}
            width={9}
            height={64}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "100px", left: "1077px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc4L"}
            value={50}
            maxValue={100}
            color={"#8d730e"}
            width={9}
            height={64}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "100px", left: "892px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc2L"}
            value={50}
            maxValue={100}
            color={"#8d730e"}
            width={9}
            height={64}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "212px", left: "850px", color: "#000" }}
        >
          РВС-1
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "246px",
            left: "850px",
            color: "#000",
            fontSize: "9px",
          }}
        >
          V 1000м³
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "106px", left: "850px", color: "#000" }}
        >
          РВС-2
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "140px",
            left: "850px",
            color: "#000",
            fontSize: "9px",
          }}
        >
          V 1000м³
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "106px", left: "1035px", color: "#000" }}
        >
          РВС-4
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "140px",
            left: "1035px",
            color: "#000",
            fontSize: "9px",
          }}
        >
          V 1000м³
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "212px", left: "1035px", color: "#000" }}
        >
          РВС-3
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "246px",
            left: "1035px",
            color: "#000",
            fontSize: "9px",
          }}
        >
          V 1000м³
        </div>

        {/* Скважины справа */}
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "424px", left: "1282px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc1L"}
            value={50}
            maxValue={100}
            color={"#0C5D81"}
            width={7}
            height={49}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "321px", left: "1410px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc3L"}
            value={595}
            maxValue={1000}
            color={"#0C5D81"}
            width={7}
            height={49}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "424px", left: "1410px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc4L"}
            value={20}
            maxValue={100}
            color={"#0C5D81"}
            width={12}
            height={49}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{ top: "321px", left: "1282px", color: "#000" }}
        >
          <ProgressBar
            key={"pbc2L"}
            value={50}
            maxValue={100}
            color={"#0C5D81"}
            width={7}
            height={49}
          />
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "431px",
            left: "1250px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          РВС-1
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "456px",
            left: "1250px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          V 500м³
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "326px",
            left: "1250px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          РВС-2
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "356px",
            left: "1250px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          V 500м³
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "431px",
            left: "1380px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          РВС-4
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "456px",
            left: "1380px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          V 500м³
        </div>

        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "326px",
            left: "1380px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          РВС-3
        </div>
        <div
          className={`${styles.box} ${styles.textBox}`}
          style={{
            top: "356px",
            left: "1380px",
            color: "#000",
            fontSize: "7px",
          }}
        >
          V 500м³
        </div>
      </div>

      <div
        className={`${styles.box} ${styles.textBox}`}
        style={{ top: "466px", left: "1020px" }}
      >
        <Indicator indicatorNumber={69.3} indicatorUnits={"т/ч"} />
        <Indicator indicatorNumber={86.8} indicatorUnits={"м3/ч"} />
        <LabelBox label={"Расходомер"} width={30} height={3} fontSize={5} />
      </div>
    </div>
  );
}
