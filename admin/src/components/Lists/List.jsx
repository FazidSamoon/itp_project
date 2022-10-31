import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { deleteInventoryDetails } from "../../api/inventory/inventoryServices";
import { deleteMenuItem } from "../../api/menu/menuServices";
import { deleteCustomerDetails } from "../../api/user/userServices";

const List = ({ response, title, dataCols }) => {
  const navigate = useNavigate()
  const handleDelete = (id) => {
    if (title === "Menu") {
      deleteMenuItem(id);
      // navigate('/menu/view')
      navigate(0);
    }

    if (title === "Inventory") {
      deleteInventoryDetails(id).then((res) => {
        if(res.success === true) navigate(0)
        else alert(res.message)
      })
    }

    if (title === "Customers") {
      deleteCustomerDetails(id).then((res) => {
        if(res.success === true) navigate(0)
        else alert(res.message)
      })
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={
                title === "Inventory"
                  ? "/inventory/edit/" + params.row._id
                  : title === "Menu"
                  ? "/menu/edit/" + params.row._id
                  : "/customer/edit/" + params.row._id
              }
            >
              <button className="w-20 h-7 mr-3 border bg-primary border-primary text-white">
                Edit
              </button>
            </Link>

            <button
              onClick={() => handleDelete(params.row._id)}
              className="w-20 h-7 mr-3 border border-[#D31616] text-[#D31616]"
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="ml-5 mt-5 shadow-lg mr-4">
      {title}
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={response}
          columns={dataCols.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
};

export default List;
