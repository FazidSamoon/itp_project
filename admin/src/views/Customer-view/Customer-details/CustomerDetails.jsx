import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../../../api/user/userServices";
import { customerColumns } from "../../../data/dataTable";

const CustomerDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllCustomers().then((res) => {
        setUsers(res.data)
    });
  }, []);
  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/customer/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>

        <List
          response={users}
          title={"Customers"}
          dataCols={customerColumns}
        />
      </div>
    </div>
  );
};

export default CustomerDetails;
