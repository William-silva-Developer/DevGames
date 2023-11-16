import { combineReducers } from "redux";

import ListFilmsReducer from "./ListGamesSlice/ListGamesSlice";
import listCategoryReducer from "./ListCategorySlice/ListCategorySlice";
import listByNameGameReducer from "./ListByNameGameSlice/ListByNameGameSlice";
import ListByIdCategoryReducer from "./ListByCategorySlice/ListByCategorySlice";
import ListDetailsGameReducer from "./ListDetailsGameSlice/ListDetailsGameSlice";

const rootReducer = combineReducers({
  listAllFilms: ListFilmsReducer,
  category: listCategoryReducer,
  searchByName: listByNameGameReducer,
  categoryId: ListByIdCategoryReducer,
  detailsGame: ListDetailsGameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
