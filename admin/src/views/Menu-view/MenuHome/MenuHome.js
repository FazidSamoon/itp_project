import React from 'react'
import Charts from "../../../components/Charts/Charts";
import Featured from "../../../components/Featured/Featured";
import Tables from "../../../components/Tables/Table";

const MenuHome = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex">
          <div className="flex-[3]">
            <Featured />
          </div>
          <div className="flex-[6]">
            <Charts />
          </div>
        </div>
{/* 
        <div className="p-8 ml-10 mr-10 mt-10 shadow-xl">
          <h1>Menu items</h1>
          <Tables />
        </div> */}
      </div>
    </div>
  );
}

export default MenuHome