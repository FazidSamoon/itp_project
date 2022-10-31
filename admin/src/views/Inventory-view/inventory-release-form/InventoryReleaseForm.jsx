import { useLocation } from "react-router-dom"
import { makeReleaseRequest } from "../../../api/inventory/inventoryServices"
import Form from "../../../components/Forms/form"

const formInfo = [
    {key: "Department Name", name: "departmentName", type: "text"},
    {key: "Quantity", name: "quantity", type: "text"},
    {key: "Date", name: "date", type: "date"}
]

const InventoryReleaseForm = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[5]
  return (
    <div className="flex item-center justify-center">
        <Form 
            formInfo={formInfo}
            title="REQUEST STOCKS"
            func={makeReleaseRequest}
            path={"/inventory/release/request"}
            id={id}
        />
    </div>
  )
}

export default InventoryReleaseForm