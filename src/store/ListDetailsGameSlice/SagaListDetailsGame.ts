import { call, put, race, delay, all, takeLatest } from "redux-saga/effects";
import { api } from "../../service/api";

import {
  listDetailsGame,
  requestTimeout,
  responseStatusCode,
} from "./ListDetailsGameSlice";

function* requestListDetailsGame(name: any) {
  try {
    const nameGame = name.payload;
    const key = process.env.EXPO_PUBLIC_API_KEY;

    const { res, timeout } = yield race({
      res: call(api.get, `/games/${nameGame}?key=${key}`),
      timeout: delay(20000),
    });

    if (timeout) {
      yield put(requestTimeout());
    }

    yield put(listDetailsGame(res.data));
  } catch (error: any) {
    yield put(responseStatusCode());
  }
}
export default all([
  takeLatest(
    "requestListDetailsGame/requestListDetailsGame",
    requestListDetailsGame
  ),
]);
