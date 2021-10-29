import { combineReducers } from "redux";
import dataReducer from "../Reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
