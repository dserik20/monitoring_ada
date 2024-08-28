import React, { useState, useEffect } from "react";
import styles from "./AppNav.module.css";
import DataDisplay from "../DataDisplay/DataDisplay";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.appBar}>
      <div className={styles.toolbar}>
        <div className={styles.iconContainer}>
          <button className={styles.menuButton}>
            <span className={styles.menuIcon}>&#9776;</span>
          </button>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Мониторинг добычи жидкости и нефти</div>
          <div className={styles.subtitle}>Месторождение "Башенколь"</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.timeContainer}>
          <div className={styles.date}>{currentTime.toLocaleDateString()}</div>
          <div className={styles.time}>{formattedTime}</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.dataDisplayContainer}>
          <DataDisplay label="10 последних ГТМ/КРС" />
        </div>
        <div className={styles.actionContainer}>
          <NavLink to="/">Основная</NavLink>
          <NavLink to="/abc">ABC</NavLink>
          <NavLink to="/scheme">Схема</NavLink>
          <NavLink to="/oil">Нефть</NavLink>
          <span className={styles.settingsIcon}>&#9881;</span>
        </div>
      </div>
    </div>
  );
}
