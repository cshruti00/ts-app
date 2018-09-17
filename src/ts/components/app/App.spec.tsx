import * as React from 'react';
import App from './App';
import {generateMockStore} from "../../mockStore";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";

describe('App component', () => {
    const initialState: any = [];
    let mockStore = generateMockStore(initialState);

    beforeEach(() => {
        mockStore.clearActions();
    });

    describe('when app is passed', () => {
        const mockState = {
            theme: {selectedTheme: "sgp"},
            todos: [
                {title: "sample"}
            ]
        };
        mockStore = generateMockStore(mockState);

        it('should render App Component', () => {
            const component = renderer.create(<Provider store={mockStore}><App/></Provider>);
            expect(component).toMatchSnapshot();
        });
    });
});
