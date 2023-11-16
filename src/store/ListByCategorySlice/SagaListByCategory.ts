import { race, call, delay, put, all, takeLatest } from "redux-saga/effects";
import { api } from "../../service/api";
import { listByCategory, responseError } from "./ListByCategorySlice";

function* requestListByCategory(id: any) {
  try {
    const idGame = String(id.payload);
    const key = process.env.EXPO_PUBLIC_API_KEY;
    const { res, timeout } = yield race({
      res: call(api.get, `/games?page_size=5&key=${key}&genres=${idGame}`),
      timeout: delay(20000),
    });

    if (timeout) {
      yield put(responseError());
    }

    yield put(listByCategory(res.data.results));
  } catch (error: any) {
    yield put(responseError());
  }
}
export default all([
  takeLatest(
    "requestListByCategory/requestListByCategory",
    requestListByCategory
  ),
]);
