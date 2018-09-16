import TodoReducer from '../reducers/Todos';
import {ActionTypes} from "../types/TodoActionType";
import TodoType from "../types/TodoType";
import {Action} from "../actions/Todos";

describe('todo reducer', () => {
    let mockAction: Action;
    let mockState: TodoType[];
    let state: TodoType[];

    it('should add new todo to Array', () => {
        mockState = [];
        mockAction = {
            type: ActionTypes.ADD_TODO,
            payload: {todo: {title: "reducer"}}
        };

        state = TodoReducer(mockState,mockAction);
        expect(state).toEqual([{title:"reducer"}]);
    });
});
