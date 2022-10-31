import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ data }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="flex-1 bg-white min-h-screen border-r-2 flex flex-col">
      <div>
        {data.map((data) => (
          <Link to={data.url}>
            <div className="flex items-center ml-2 mt-4">
              <span className="text-primary">{data.icon}</span>
              <span className="text-sm font-bold text-[#999] ml-2">
                {data.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="ml-2 mt-8">
        <span className="text-md font-bold text-[#999]">Accounts</span>
        <div className="flex items-center mt-4 cursor-pointer">
          <span className="text-primary">
            <Person2OutlinedIcon />
          </span>
          <span className="text-sm font-bold text-[#999] ml-2">Profile</span>
        </div>
        <div className="flex items-center mt-4 cursor-pointer" onClick={handleLogout}>
          <span className="text-primary">
            <LogoutOutlinedIcon />
          </span>
          <span className="text-sm font-bold text-[#999] ml-2">Logout</span>
        </div>
        <div className="flex mt-6">
          <div className="h-4 w-4 border-2 border-primary rounded-sm"></div>
          <div className="h-4 w-4 ml-2 bg-black rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
