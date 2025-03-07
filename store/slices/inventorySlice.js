import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: [],
  },
  reducers: {
    setInventoryData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setInventoryData } = inventorySlice.actions;
export default inventorySlice.reducer;
