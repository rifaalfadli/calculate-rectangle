import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RectangleAreaPage } from "./pages/RectangleAreaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RectangleAreaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
