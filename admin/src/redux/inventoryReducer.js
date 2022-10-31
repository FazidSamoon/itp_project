import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    inventoryActionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    inventoryActionFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getAllInventories: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.inventories = action.payload;
    },
  },
});

export const { inventoryActionStart, inventoryActionFail, getAllInventories } =
  inventorySlice.actions;
export default inventorySlice.reducer;
