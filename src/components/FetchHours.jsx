import React, { useEffect, useState } from "react";
import { fetch2Hours } from "../axios/wellService";

export default function HoursList() {
  const [hours, setHours] = useState({}); // Initialize as an object

  useEffect(() => {
    fetch2Hours()
      .then((response) => {
        setHours(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wells!", error);
      });
  }, []);

  const hourEntries = Object.entries(hours);

  return (
    <div>
      <h1>Hours List</h1>
      <h1>{hourEntries.length}</h1>
      <ul>
        {hourEntries.map(([key, hour]) => (
          <li key={key}>
            <div>Current Debit: {hour.current_debit}</div>
            <div>Tech Rezh: {hour.tech_rezh}</div>
            <div>Debit Last Day: {hour.debit_last_day}</div>
            <div>Current Debit Nak: {hour.current_debit_nak}</div>
            <div>Tech Rezh Nak: {hour.tech_rezh_nak}</div>
            <div>Debit Last Day Nak: {hour.debit_last_day_nak}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
