import {
  createInventory,
  editInventory,
} from "../../../api/inventory/inventoryServices";
import Form from "../../../components/Forms/form";
import { useLocation } from "react-router-dom";

const formInfo = [
  { key: "Inventory Name", name: "inventoryName", type: "text" },
  { key: "Supplier Name", name: "supplierName", type: "text" },
  { key: "Quantity", name: "quantity", type: "number" },
  { key: "Expiration Date", name: "expirationDate", type: "Date" },
  { key: "Unit Price", name: "unitPrice", type: "number" },
  { key: "Type", name: "type", options: ["Food", "Furniture"], type: "select" },
  {
    key: "In Stock",
    name: "inStock",
    options: ["true", "false"],
    type: "select",
  },
];
const InventoryForm = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];

  return (
    <div className="flex item-center justify-center">
      <Form
        formInfo={formInfo}
        title={path === "add" ? "CREATE INVENTORY" : "EDIT INVENTORY"}
        func={
          route === "inventory"
            ? path === "add"
              ? createInventory
              : editInventory
            : null
        }
        path={route === "inventory" ? "/inventory/view" : "/"}
        id={path === "edit" ? id : null}
      />
    </div>
  );
};

export default InventoryForm;
