import { combineReducers } from "redux";
import todoReducers from "./todoReducers";

const rootReducers = combineReducers({
     list: todoReducers
})

export default rootReducers;