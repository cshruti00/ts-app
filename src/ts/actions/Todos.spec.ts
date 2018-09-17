import {MockStore} from 'redux-mock-store';
import {generateMockStore} from "../mockStore";
import {addTodo} from "./Todos";
import {ActionTypes} from "../types/ActionType";

describe('Test Action', () => {
    let store: MockStore<{}>;

    beforeEach(() => {
        store = generateMockStore({});
        store.clearActions();
    });

    describe('add Todo', () => {
        beforeEach(() => {
           store.dispatch(addTodo("sample")) ;
        });
        it('should add todo to store where addTodo action is called', () => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({type: ActionTypes.ADD_TODO, payload : {todo: {title: "sample"}} })
        });
    });
});

