import {createStore} from "redux";
import {combineReducers} from "redux";
import {applyMiddleware} from "redux";
import ThunkMiddleware from "redux-thunk";
import countryReducer from "./Reducers/countryReducer";
import globalReducer from "./Reducers/globalReducer";

const reducers = combineReducers({
    countryReducer : countryReducer,
    globalReducer:globalReducer
})
const store = createStore(reducers,applyMiddleware(ThunkMiddleware));
export default store