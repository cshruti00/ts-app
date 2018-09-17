import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todo from "./Todo";

describe("dumb component", () => {
    it('renders without crashing', () => {
        const todos = [{title: "sample"}];
        const div = document.createElement('div');
        ReactDOM.render(<Todo addTodo={jest.fn()} todos={todos}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});


