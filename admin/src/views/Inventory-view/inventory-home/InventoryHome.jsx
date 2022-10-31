import { Link } from "react-router-dom";

const InventoryHome = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-[#999] mt-9">
          Manage your inventories
        </h1>
        <div className="w-full flex mt-10 ">
          <Link to="release/request">
            <div className="flex flex-col items-center justify-center h-full w-full p-11 mr-4 shadow-2xl">
              <span className="text-xl font-extrabold text-[#999]">
                REQUEST INVENTORY
              </span>
              <span className="text-center mt-4 text-sm font-semibold text-[#999]">
                Visit here to request your stock need
              </span>
            </div>
          </Link>

          <Link to="overview">
            <div className="flex flex-col items-center justify-center h-full w-full p-11 ml-4 shadow-2xl">
              <span className="text-xl font-extrabold text-[#999]">
                MANAGE INVENTORY
              </span>
              <span className="text-center mt-4 text-sm font-semibold text-[#999]">
                Visit here to request your stock need
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryHome;
