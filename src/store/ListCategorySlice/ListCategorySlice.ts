import { createSlice } from "@reduxjs/toolkit";
import { OBJGame } from "../../interfaces/OBJGame/OBJGame";

const initialState = {
  loading: false,
  responseStatusError: false,
  requestTimeout: false,
  OBJCategory: [] as OBJGame[],
  responseStatus400: false,
};

const ListCategorySlice = createSlice({
  name: "requestListCategory",
  initialState,
  reducers: {
    requestListCategory: (state) => {
      state.loading = true;
      console.log("RequestListCategory");
    },
    listCategory: (state, action) => {
      state.OBJCategory = action.payload;
      state.loading = false;
    },
    requestTimeout: (state) => {
      state.requestTimeout = true;
    },
    responseStatusCode: (state, action) => {
      state.loading = false;
      state.responseStatusError = true;
    },
    resetValues: (state) => {
      state.requestTimeout = false;
      state.responseStatusError = false;
    },
  },
});

export const {
  listCategory,
  requestListCategory,
  responseStatusCode,
  requestTimeout,
} = ListCategorySlice.actions;

export default ListCategorySlice.reducer;
