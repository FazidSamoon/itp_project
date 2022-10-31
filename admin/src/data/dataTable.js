export const inventoryColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "inventoryName", headerName: "Inventory Name", width: 130 },
  { field: "supplierName", headerName: "Suppler Name", width: 130 },
  {
    field: "quantity",
    headerName: "Quantity Remain",
    type: "number",
    width: 50,
  },
  {
    field: "receivedDate",
    headerName: "Received Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "expirationDate",
    headerName: "Expiration Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "type",
    headerName: "Type",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 50,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 50,
  },
];

export const inventoryRows = [
  { id: 1, lastName: "fazid", InventoryName: "sss", age: 35 },
  { id: 2, lastName: "Lannister", InventoryName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", InventoryName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", InventoryName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", InventoryName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", InventoryName: null, age: 150 },
  { id: 7, lastName: "Clifford", InventoryName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", InventoryName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", InventoryName: "Harvey", age: 65 },
];

export const customerColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "customertName", headerName: "Customer Name", width: 130 },
  { field: "customerEmail", headerName: "Customer Email", width: 130 },
  {
    field: "customerPhonenumber",
    headerName: "Phone number",
    type: "number",
    width: 50,
  },
  {
    field: "customerAddress",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "customerRanking",
    headerName: "Customer Ranking",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

export const menuColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 160,
  },
  {
    field: "foodItemName",
    headerName: "Food Item name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
  },
  {
    field: "foodItemDescription",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: true,
    width: 80,
  },
  {
    field: "available",
    type: Boolean,
    headerName: "Availability",
    sortable: true,
    width: 100,
  },
  {
    field: "cuisineType",
    headerName: "Cuisine Type",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
  {
    field: "mealType",
    headerName: "Meal Type",
    description: "This column has a value getter and is not sortable.",
    sortable: "This column has a value getter and is not sortable.",
    width: 100,
  },
  {
    field: "image",
    headerName: "Image",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 80,
  },
  {
    field: "consumption",
    headerName: "consumption",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 80,
  },
];
