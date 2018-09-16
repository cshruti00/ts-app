import TodoReducer from './Todos';
import {combineReducers} from "redux";

export default combineReducers({
    todos : TodoReducer
});