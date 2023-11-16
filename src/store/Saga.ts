import { all } from "redux-saga/effects";
import Films from "./ListGamesSlice/SagaListGames";
import Category from "./ListCategorySlice/SagaListCategory";
import ByNameGame from "./ListByNameGameSlice/SagaListByNameGame";
import ByIdCategory from "./ListByCategorySlice/SagaListByCategory";
import DetailsGame from "./ListDetailsGameSlice/SagaListDetailsGame";

export default function* rootSaga() {
  yield all([Films, Category, ByNameGame, ByIdCategory, DetailsGame]);
}
