import { OBJGame } from "../../interfaces/OBJGame/OBJGame";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  responseStatus400: false,
  OBJGame: [] as OBJGame[],
};

const ListByNameGameSlice = createSlice({
  name: "requestListByNameGame",
  initialState,
  reducers: {
    requestListByNameGame: (state, action) => {
      state.loading = true;
    },
    listByNameGame: (state, action) => {
      state.OBJGame = action.payload;
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
  listByNameGame,
  requestListByNameGame,
  responseError,
  resetValues,
} = ListByNameGameSlice.actions;
export default ListByNameGameSlice.reducer;
