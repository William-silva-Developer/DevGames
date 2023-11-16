import { put, all, call, takeLatest, delay, race } from "redux-saga/effects";
import { api } from "../../service/api";
import {
  responseStatusCode,
  listCategory,
  requestTimeout,
} from "./ListCategorySlice";

function* requestListCategory() {
  try {
    const key = process.env.EXPO_PUBLIC_API_KEY;

    const { res, timeout } = yield race({
      res: call(api.get, `/genres?key=${key}`),
      timeout: delay(20000),
    });

    if (timeout) {
      yield put(requestTimeout());
    }

    const data = {
      id: 547812,
      name: "All games",
      slug: "",
      games_count: 0,
      image_background: "",
    };
    res.data.results.unshift(data);
    yield put(listCategory(res.data.results));
  } catch (error: any) {
    yield put(responseStatusCode(error.response?.status));
  }
}

export default all([
  takeLatest("requestListCategory/requestListCategory", requestListCategory),
]);
