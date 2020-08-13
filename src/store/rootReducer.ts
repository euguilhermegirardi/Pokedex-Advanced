import { combineReducers } from "redux";

import homeReducer from "./modules/home/reducer";
import ApplicationState from "./State";

const rootReducer = combineReducers<ApplicationState>({
  modules: combineReducers({
    home: homeReducer,
  }),
});

export default rootReducer;
