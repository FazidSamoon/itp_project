import React from "react";
import Featured from "../../components/Featured/Featured";
import Charts from "../../components/Charts/Charts";
import Tables from "../../components/Tables/Table";



const InventoryIndex = () => {
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

        <div className="p-8 ml-10 mr-10 mt-10 shadow-xl">
          <h1>Recent stock release requests</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default InventoryIndex;
