import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReservationView from "../pages/reservationView";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservationView" element={<ReservationView />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
