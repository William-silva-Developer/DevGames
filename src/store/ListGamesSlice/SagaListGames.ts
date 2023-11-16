import { put, all, delay, call, takeLatest, race } from "redux-saga/effects";
import { api } from "../../service/api";

import { listAllGames, responseError } from "./ListGamesSlice";

function* requestAllGames() {
  try {
    const key = process.env.EXPO_PUBLIC_API_KEY;
    const { res, timeout } = yield race({
      res: call(api.get, `/games?page_size=14&key=${key}`),
      timeout: delay(20000),
    });

    yield put(listAllGames(res.data.results));
  } catch (error: any) {
    yield put(responseError());
    console.log(error.response?.status);
  }
}

export default all([
  takeLatest("requestAllGames/requestAllGames", requestAllGames),
]);
