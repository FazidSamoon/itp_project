import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllReleaseRequests, manageInventoryRequests } from "../../../api/inventory/inventoryServices";

const ReleaseRequests = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    getAllReleaseRequests().then((res) => {
      setOrders(res.data)
    })
  }, [])

  const handleInventory = (status, id) => {
    console.log(status);
    manageInventoryRequests({"requestStatus" : status}, id).then((response) => {
      if (!response.success) alert(response.message)
      else navigate(0);
    })
  }

  return (
    <div className="flex flex-col">
      <div className="flex-[7] w-full">
        <h1 className="text-xl font-bold text-[#999] mt-5 ml-3">Stock release requests</h1>
      </div>
      <div className="flex ml-3 mt-6">
        <div className="flex-[3]">ID</div>
        <div className="flex-[3]">Stock ID</div>
        <div className="flex-[1.5]">Department</div>
        <div className="flex-[1.5]">quantity</div>
        <div className="flex-[1.5]">Status</div>
        <div className="flex-[3]">Actions</div>
      </div>
      {orders.map((order) => (
        <div className="flex ml-3 mt-1 ">
        <div className="flex-[3] border-r-2 border-primary">{order._id}</div>
        <div className="flex-[3] border-r-2 border-primary">{order.stockId}</div>
        <div className="flex-[1.5] border-r-2 border-primary">{order.departmentName}</div>
        <div className="flex-[1.5] border-r-2 border-primary">{order.quantity}</div>
        <div className="flex-[1.5] border-r-2 border-primary">{order.requestStatus}</div>
        <div className="flex-[3] border-r-2 border-primary"><button onClick={() => handleInventory("APPROVED" , order._id)} className=" ml-2 bg-primary p-1 text-white w-15 h-5 text-xs">APPROVE</button><button onClick={() => handleInventory("REJECTED", order._id)} className=" ml-2 bg-red-800 p-1 text-white w-15 h-5 text-xs">REJECT</button></div>
      </div>
      ))}
      
    </div>
  );
};

export default ReleaseRequests;
