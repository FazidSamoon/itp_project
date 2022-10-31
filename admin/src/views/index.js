import { Route, Routes } from "react-router-dom";
import HomeIndex from "./Home-view/HomeIndex";
import InventoryRoutes from "./Inventory-view";
import CustomerRoutes from './Customer-view'
import Login from "./Auth-view/Login/Login";
import Signup from "./Auth-view/Register/Signup";
import InventoryHome from "./Inventory-view/inventory-home/InventoryHome";
import MenuRoutes from './Menu-view'
import FileNotFound from "../components/errors/fileNotFound";
import { useState } from "react";
import UnAuthorized from "../components/errors/unAuthorized";

export const Views = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomeIndex />} />
          <Route path="auth">
            <Route path="login" element={<Login />} />,
            <Route path="register" element={<Signup />} />
          </Route>
        </Route>
        <Route path="/inventory/" element={user ? <InventoryHome /> : <UnAuthorized />} />
        <Route path="/inventory/*" element={user?.otherDetails.staff.position === "INVENTORY MANAGER" ? <InventoryRoutes /> : <UnAuthorized />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path='/menu/*' element={<MenuRoutes/>}/>
        <Route path="/*" element={<FileNotFound />} />
      </Routes>
    </div>
  );
};

export default Views;
