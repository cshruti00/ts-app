import TodoReducer from './TodoReducer';
import ThemeSel from "./ThemeReducer";
import {combineReducers} from "redux";

export default combineReducers({
    todos : TodoReducer,
    theme: ThemeSel
});