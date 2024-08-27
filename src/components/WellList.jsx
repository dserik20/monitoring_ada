import React, { useEffect, useState } from "react";
import { fetchWells } from "../axios/wellService";

export default function WellList() {
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

  return (
    <div>
      <h1>Well List</h1>
      <ul>
        {wells.map((well) => (
          <li key={well.id}>
            {well.well} {well.tr_fluid} {well.tr_oil} {well.tr_water}{" "}
            {well.ecn_status} {well.fon_fluid} {well.fon_oil} {well.zamer}
          </li>
        ))}
      </ul>
    </div>
  );
}
