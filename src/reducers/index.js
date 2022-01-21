import counterReducer from "./Counter";
import isloggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    islogged:isloggedReducer
});

export default allReducers;