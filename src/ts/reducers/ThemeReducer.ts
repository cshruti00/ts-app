import {Themes, ThemeType} from "../types/ThemeType";
import {Action} from "../actions/Todos";
import {ActionTypes} from "../types/ActionType";

const initialState ={selectedTheme:Themes.DARK};

export default (state: ThemeType = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.THEME_SELECTED:
            return action.payload.selectedTheme;
        default:
            return state
    }
}

