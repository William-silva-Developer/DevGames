import { createSlice } from "@reduxjs/toolkit";
import { OBJGame } from "../../interfaces/OBJGame/OBJGame";

const initialState = {
  loading: false,
  responseStatus400: false,
  OBJFilms: [] as OBJGame[],
};

const ListGamesSlice = createSlice({
  name: "requestAllGames",
  initialState,
  reducers: {
    requestAllGames: (state) => {
      state.loading = true;
    },
    listAllGames: (state, action) => {
      state.OBJFilms = action.payload;
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

export const { listAllGames, requestAllGames, responseError, resetValues } =
  ListGamesSlice.actions;

export default ListGamesSlice.reducer;
