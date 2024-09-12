import React, { createContext, useState, useEffect } from "react";
import { fetchWellsABC } from "../axios/wellService";

const WellsABCCOntext = createContext();

const WellsABCCOntextProvider = ({ children }) => {
  const [wellsGrid, setWellsGrid] = useState([]);
  const [wellsChart, setWellsChart] = useState([]);
  const [wells, setWells] = useState([]);
  const [selectedWell, setSelectedWell] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWellsABC();
        if (response && response.data) {
          const wellsData = response.data;

          const lastDate = wellsData
            .filter((well) => well.well === "BSK_0002")
            .at(-2)["date"];
          const wellsGridDate = wellsData.filter(
            (well) => well.date === lastDate
          );
          setWellsChart(wellsData);
          setWellsGrid(wellsGridDate);
          setWells(wellsData);

          const filtered = wellsData.filter((well) => well.well === "BSK_0002");
          if (filtered.length > 0) {
            setSelectedWell(filtered);
          } else {
            console.warn("No well matching 'BSK_0002' was found");
          }
        } else {
          console.error("No data found in response");
        }
      } catch (error) {
        console.error("Error fetching wells:", error.message || error);
      }
    };

    fetchData();
  }, []);

  return (
    <WellsABCCOntext.Provider
      value={{
        wells,
        setWells,
        selectedWell,
        setSelectedWell,
        wellsGrid,
        setWellsGrid,
        wellsChart,
        setWellsChart,
      }}
    >
      {children}
    </WellsABCCOntext.Provider>
  );
};

export { WellsABCCOntext, WellsABCCOntextProvider };
