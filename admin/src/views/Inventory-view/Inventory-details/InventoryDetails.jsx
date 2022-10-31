import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "../../../components/Lists/List";
import { inventoryColumns } from "../../../data/dataTable";
import { getAllInventories } from "../../../api/inventory/inventoryServices";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    getAllInventories().then((res) => {
      setInventory(res.data)
    })
    
  },[])
  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/inventory/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>

        <List
          response={inventory}
          title={"Inventory"}
          dataCols={inventoryColumns}
        />
      </div>
    </div>
  );
};

export default InventoryDetails;
