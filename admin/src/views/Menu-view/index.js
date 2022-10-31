import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MenuHome from "./MenuHome/MenuHome";
import MenuDetails from "./MenuDetails/MenuDetails";
import Sidebar from "../../components/common/Sidebar";
import { Route, Routes } from "react-router-dom";
import MenuForm from "./MenuForm/MenuForm";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/menu/overview",
  },
  {
    id: "2",
    title: "Menus",
    icon: <MenuBookIcon />,
    url: "/menu/view",
  },
  {
    id: "1",
    title: "Stats",
    icon: <QueryStatsIcon />,
    url: "/stats",
  },
];

const index = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div>

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<MenuHome />} />
          <Route path="view" element={<MenuDetails />} />
          <Route path="add" element={<MenuForm />} />
          <Route path="edit/:id" element={<MenuForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;
