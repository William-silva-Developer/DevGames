import { put, all, takeLatest, call, race, delay } from "redux-saga/effects";
import { api } from "../../service/api";

import { listByNameGame, responseError } from "./ListByNameGameSlice";

function* requestListByNameGame(name: any) {
  try {
    const nameGame = name.payload;
    const key = process.env.EXPO_PUBLIC_API_KEY;

    const { res, timeout } = yield race({
      res: call(api.get, `/games?page_size=5&key=${key}&search=${nameGame}`),
      timeout: delay(20000),
    });

    if (timeout) {
      yield put(responseError());
    }

    yield put(listByNameGame(res.data.results));
  } catch (error: any) {
    yield put(responseError());
  }
}

export default all([
  takeLatest(
    "requestListByNameGame/requestListByNameGame",
    requestListByNameGame
  ),
]);
