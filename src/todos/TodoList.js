import React from "react";
import  { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import { removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo}  key={todo.text} onRemovedPressed={onRemovedPressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});  

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
});  

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);