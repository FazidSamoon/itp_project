import Form from "../../../components/Forms/form";
import { useLocation } from "react-router-dom";
import { createCustomer, updateCustomer } from "../../../api/user/userServices";

const formInfo = [
  { key: "Customer Name", name: "customertName", type: "text" },
  { key: "Email", name: "customerEmail", type: "text" },
  { key: "Phone number", name: "customerPhonenumber", type: "number" },
  { key: "Address", name: "customerAddress", type: "Date" },
  { key: "Ranking", name: "customerRanking", options: ["LOYALTY", "REGULAR"], type: "select" },
];

const CustomerForm = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];
  return (
    <div className="flex item-center justify-center">
      <Form
        formInfo={formInfo}
        title={path === "add" ? "CREATE CUSTOMER" : "EDIT CUSTOMER"}
        func={
          route === "customer"
            ? path === "add"
              ? createCustomer
              : updateCustomer
            : null
        }
        path={route === "customer" ? "/customer/view" : "/"}
        id={path === "edit" ? id : null}
      />
    </div>
  )
}

export default CustomerForm