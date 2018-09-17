import {ActionTypes} from "../types/ActionType";

export interface ThemeAction {
    type: ActionTypes.THEME_SELECTED,
    payload: { selectedTheme: string }
}

export function setTheme(selectedTheme: string): ThemeAction {
    return {
        type: ActionTypes.THEME_SELECTED,
        payload: {
            selectedTheme
        }
    }
}
