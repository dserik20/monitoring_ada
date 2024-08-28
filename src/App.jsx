import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import ABCLayout from "./pages/ABC/ABCLayout";
import Diagram from "./components/Diagram/Diagram";
import ModalTest from "./components/ModalTest";
import OilLoss from "./components/OilLoss";
import FetchHours from "./components/FetchHours";
import WellList from "./components/WellList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          {/* <Route index element={<FetchHours />} /> */}
          {/* <Route index element={<WellList />} /> */}
          <Route path="abc" element={<ABCLayout />} />
          <Route path="scheme" element={<Diagram />} />
          <Route path="oil" element={<OilLoss />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
