import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./Saga";
import rootReducer from "./rootReducer";

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);
