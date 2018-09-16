import thunk from "redux-thunk";
import configureStore, {MockStore} from "redux-mock-store";
import TodoType from "./types/TodoType";

export const generateMockStore = (state: TodoType[] | {}): MockStore<TodoType[] | {}> => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    store.clearActions();
    return store;
};