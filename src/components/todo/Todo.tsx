import * as React from 'react';
import TodoType from "../../types/TodoType";

export interface TodoStateType {
    title: string,
}

export interface TodoPropType {
    todos: TodoType[],
    addTodo: (a: string) => void,
}

class Todo extends React.Component<TodoPropType, TodoStateType> {
    constructor(props: TodoPropType) {
        super(props);
        this.state = {
            title: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e: any) {
        this.setState({
            title: e.target.value
        });

    }

    onSubmitHandler(e: any) {
        this.props.addTodo(this.state.title);
        e.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit={this.onSubmitHandler}>
                <input onChange={this.onChangeHandler}/>
                <button type="submit">+</button>
            </form>
            <ul>{this.props.todos.map((todo,i) => {
                return (<li key={i}>{todo.title}</li>);
            })}</ul>

        </div>);
    }
}

export default Todo;