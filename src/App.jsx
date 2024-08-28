import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import Diagram from "./components/Diagram/Diagram";
import WellList from "./components/WellList";
import ModalTest from "./components/ModalTest";
import ABCChart from "./components/ABCChart/ABCChart";
import ABCLayout from "./pages/ABC/ABCLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          {/* <Route index element={<WellList />} /> */}
          {/* <Route index element={<ModalTest />} /> */}
          <Route path="abc" element={<ABCLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
