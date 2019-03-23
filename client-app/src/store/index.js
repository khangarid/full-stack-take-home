import { combineReducers } from "redux";
import { entriesReducer } from "./entries/reducers";

const rootReducer =  combineReducers({
  entries: entriesReducer
});

export { rootReducer };
