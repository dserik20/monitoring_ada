import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import ABCLayout from "./pages/ABC/ABCLayout";
import Diagram from "./components/Diagram/Diagram";
import ModalTest from "./components/ModalTest";
import OilLoss from "./components/OilLoss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          {/* <Route index element={<WellList />} /> */}
          {/* <Route index element={<ModalTest />} /> */}
          {/* <Route path="abc" element={<ABCLayout />} /> */}
          <Route path="scheme" element={<Diagram />} />
          <Route path="oil" element={<OilLoss />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
