import {ActionTypes} from "../types/ActionType";
import TodoType from "../types/TodoType";
import {ThemeAction} from "./ThemeAction";

export interface AddTodoAction {
    type: ActionTypes.ADD_TODO,
    payload: { todo: TodoType }
}

export function addTodo(title: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {title}
        }
    }
}

export type Action = AddTodoAction | ThemeAction;