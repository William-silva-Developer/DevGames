import { createSlice } from "@reduxjs/toolkit";
import { OBJGame } from "../../interfaces/OBJGame/OBJGame";

const initialState = {
  loading: false,
  requestTimeout: false,
  responseStatus400: false,
  OBJCategory: [] as OBJGame[],
};

const ListByCategorySlice = createSlice({
  name: "requestListByCategory",
  initialState,
  reducers: {
    requestListByCategory: (state, action) => {
      state.loading = true;
    },
    listByCategory: (state, action) => {
      state.OBJCategory = action.payload;
      state.loading = false;
    },
    responseError: (state) => {
      state.loading = false;
      state.responseStatus400 = true;
    },
    resetValues: (state) => {
      state.responseStatus400 = false;
    },
  },
});

export const {
  listByCategory,
  requestListByCategory,
  resetValues,
  responseError,
} = ListByCategorySlice.actions;
export default ListByCategorySlice.reducer;
