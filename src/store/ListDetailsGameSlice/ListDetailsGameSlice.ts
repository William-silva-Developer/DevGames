import { createSlice } from "@reduxjs/toolkit";
import { DetailsGame } from "../../interfaces/DetailsGame/DetailsGame";

const initialState = {
  loading: false,
  responseStatusError: false,
  requestTimeout: false,
  OBJDetailsGame: {} as DetailsGame,
};

const ListDetailsGameSlice = createSlice({
  name: "requestListDetailsGame",
  initialState,
  reducers: {
    requestListDetailsGame: (state, action) => {
      state.loading = true;
    },
    listDetailsGame: (state, action) => {
      state.OBJDetailsGame = action.payload;
      state.loading = false;
    },
    requestTimeout: (state) => {
      state.loading = false;
      state.requestTimeout = true;
    },
    responseStatusCode: (state) => {
      state.responseStatusError = false;
      state.loading = false;
    },
    resetValues: (state) => {
      state.requestTimeout = false;
      state.responseStatusError = false;
    },
  },
});

export const {
  listDetailsGame,
  requestListDetailsGame,
  requestTimeout,
  resetValues,
  responseStatusCode,
} = ListDetailsGameSlice.actions;
export default ListDetailsGameSlice.reducer;
