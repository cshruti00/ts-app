import {connect} from "react-redux";
import Todo from "../../components/todo/Todo";
import {addTodo} from "../../actions/Todos";
import TodoType from "../../types/TodoType";

export interface TState {
    todos: TodoType[]
}

const mapStateToProps = (state: TState) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = {
    addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);