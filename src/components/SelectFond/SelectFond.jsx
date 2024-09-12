import React, { useContext } from "react";
import styles from "./SelectFond.module.css";

export default function SelectFond({ setFond }) {
  return (
    <div>
      <select
        className={styles.selectDropdown}
        onChange={(e) => setFond(Number(e.target.value))}
      >
        <option value="0">Добывающий фонд</option>
        <option value="1">Нагнетательный фонд</option>
      </select>
    </div>
  );
}
