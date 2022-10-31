import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Sidebar from "../../components/common/Sidebar";
import CustomerDetails from "./Customer-details/CustomerDetails";
import CustomerForm from "./Customer-form/CustomerForm";
import CustomerHome from "./Customer-home/CustomerHome";
import { Route, Routes } from "react-router-dom";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/customer",
  },
  {
    id: "2",
    title: "Customer",
    icon: <GroupsOutlinedIcon />,
    url: "/customer/view",
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
          <Route path="" element={<CustomerHome />} />
          <Route path="view" element={<CustomerDetails />} />
          <Route path="add" element={<CustomerForm />} />
          <Route path="edit/:id" element={<CustomerForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;
