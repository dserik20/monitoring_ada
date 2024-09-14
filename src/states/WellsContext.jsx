import React, { createContext, useEffect, useState } from "react";
import { fetchWells } from "../axios/wellService";

const WellsContext = createContext();

const WellsContextProvider = ({ children }) => {
  const [fond, setFond] = useState(0);
  const [wells, setWells] = useState([]);

  useEffect(() => {
    fetchWells()
      .then((response) => {
        setWells(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wells!", error); // Log any errors
      });
  }, []);

  return (
    <WellsContext.Provider value={{ fond, setFond, wells, setWells }}>
      {children}
    </WellsContext.Provider>
  );
};

export { WellsContext, WellsContextProvider };
