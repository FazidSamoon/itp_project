import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllInventories, getAllReleaseRequests } from "../../../api/inventory/inventoryServices";

const ReleaseInventoryMain = () => {
  const [inventory, setInventory] = useState([])
  useEffect(() => {
    getAllInventories().then((res) => {
      setInventory(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex-[7] w-full">
        <div className="flex items-center mt-2 ml-3">
          <input className="border border-primary" />
          <SearchRoundedIcon className="" />
        </div>
      </div>
      <div className="flex ml-3 mt-3">
        <div className="flex-[3]">ID</div>
        <div className="flex-[3]">Name</div>
        <div className="flex-[3]">Supplier</div>
        <div className="flex-[3]">Category</div>
        <div className="flex-[3]">Actions</div>
      </div>
      {inventory.map((item) => (
        <div className="flex ml-3 mt-1 ">
        <div className="flex-[3]">{item._id}</div>
        <div className="flex-[3]">{item.inventoryName}</div>
        <div className="flex-[3]">{item.supplierName}</div>
        <div className="flex-[3]">{item.type}</div>
        <div className="flex-[3]"><Link to={`/inventory/release/request/form/` + item._id} ><button className="bg-primary p-1 text-white">ORDER NOW</button></Link></div>
      </div>
      ))}
      
    </div>
  );
};

export default ReleaseInventoryMain;
