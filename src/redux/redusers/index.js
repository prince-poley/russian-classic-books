import { combineReducers } from "redux";

import filtersReducer from "./filters";
import authorsReducer from "./authors";

const rootReducer = combineReducers({
  filters: filtersReducer,
  authors: authorsReducer
})

export default rootReducer;