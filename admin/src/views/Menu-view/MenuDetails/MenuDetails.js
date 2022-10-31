import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMenuItems } from "../../../api/menu/menuServices";
import List from "../../../components/Lists/List";
import { menuColumns } from "../../../data/dataTable";


const MenuDetails = () => {

const[menuDetails, setMenuDetails] = useState([])

useEffect(()=>{
    getAllMenuItems().then((res)=>{
      if(!res.success) alert(res.message)
      else setMenuDetails(res.data)
    })
},[])

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/menu/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>

        <List
          response={menuDetails}
          title={"Menu"}
          dataCols={menuColumns}
        />
      </div>
    </div>
  );
};

export default MenuDetails;
