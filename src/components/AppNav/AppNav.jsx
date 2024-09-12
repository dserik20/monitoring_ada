import React, { useState, useEffect } from "react";
import styles from "./AppNav.module.css";
import DataDisplay from "../DataDisplay/DataDisplay";
import { NavLink } from "react-router-dom";
import { fetchLast10Wells } from "../../axios/wellService";

export default function AppNav() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDataDisplayClick = async () => {
    try {
      const response = await fetchLast10Wells();
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <div className={styles.appBar}>
      <div className={styles.toolbar}>
        <div className={styles.iconContainer}>
          <button className={styles.menuButton} onClick={toggleDropdown}>
            <span className={styles.menuIcon}>&#9776;</span>
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>
                Основная
              </NavLink>
              <NavLink to="/abc" onClick={() => setIsDropdownOpen(false)}>
                ABC
              </NavLink>
              <NavLink to="/scheme" onClick={() => setIsDropdownOpen(false)}>
                Схема
              </NavLink>
              <NavLink to="/oil" onClick={() => setIsDropdownOpen(false)}>
                Нефть
              </NavLink>
            </div>
          )}
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
          <DataDisplay label="10 последних ГТМ/КРС" clickable={true} />
        </div>
      </div>
    </div>
  );
}
