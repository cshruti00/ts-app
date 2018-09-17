import * as React from "react";
import * as renderer from "react-test-renderer";
import {generateMockStore} from "../../mockStore";
import {Provider} from "react-redux";
import Todos from "./Todos";

describe('Todo connected Component', () => {
    const initialState: any = [];
    let mockStore = generateMockStore(initialState);

    beforeEach(() => {
        mockStore.clearActions();
    });

    describe('when todo is passed', () => {
        const mockState = {
            todos: [
                {title: "sample"}
            ]
        };
        mockStore = generateMockStore(mockState);

        it('should render Todo Component', () => {
            const component = renderer.create(<Provider store={mockStore}><Todos/></Provider>);
            expect(component).toMatchSnapshot();
        });
    });
});