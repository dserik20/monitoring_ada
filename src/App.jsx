import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import ABCLayout from "./pages/ABC/ABCLayout";
import Diagram from "./components/Diagram/Diagram";
import ModalTest from "./components/ModalTest";
import OilLayout from "./pages/OilLayout/OilLayout";
import FetchHours from "./components/FetchHours";
import WellList from "./components/WellList";
import { WellsContextProvider } from "./states/WellsContext";
import { WellsABCCOntextProvider } from "./states/WellsABCContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <WellsContextProvider>
                <AppLayout />
              </WellsContextProvider>
            }
          />
          <Route
            path="abc"
            element={
              <WellsABCCOntextProvider>
                <ABCLayout />
              </WellsABCCOntextProvider>
            }
          />
          <Route path="scheme" element={<Diagram />} />
          <Route path="oil" element={<OilLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
