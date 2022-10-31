import InventoryDetails from "./Inventory-details/InventoryDetails";
import InventoryIndex from "./InventoryIndex";
import ReleaseRequests from "./Release-requests/ReleaseRequests";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../../components/common/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InventoryForm from "./inventory-forms/InventoryForm";
import ReleaseInventoryMain from "./inventory-release-main/ReleaseInventoryMain";
import FileNotFound from "../../components/errors/fileNotFound";
import InventoryReleaseForm from "./inventory-release-form/InventoryReleaseForm";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/inventory/overview",
  },
  {
    id: "2",
    title: "Inventories",
    icon: <InventoryIcon />,
    url: "/inventory/view",
  },
  {
    id: "1",
    title: "Release Requests",
    icon: <AssignmentIcon />,
    url: "/inventory/releases",
  },
  {
    id: "1",
    title: "Stats",
    icon: <QueryStatsIcon />,
    url: "/stats",
  },
];

const Index = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div>

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<InventoryIndex />} />
          <Route path="view" element={<InventoryDetails />} />
          <Route path="releases" element={<ReleaseRequests />} />
          <Route path="add" element={<InventoryForm />} />
          <Route path="edit/:id" element={<InventoryForm />} />
          <Route path="release/request" element={<ReleaseInventoryMain />} />
          <Route
            path="release/request/form/:id"
            element={<InventoryReleaseForm />}
          />
          <Route path="*" element={<FileNotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
