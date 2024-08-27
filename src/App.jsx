import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Diagram from "./components/Diagram/Diagram";
import WellList from "./components/WellList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout style={{}} />} />
          {/* <Route index element={<WellList />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
