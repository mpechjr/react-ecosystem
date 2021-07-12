import React, { useEffect } from "react";
import  { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import { completedTodoRequest, displayAlert } from "./thunks";
import { loadTodos, removeTodoRequest } from "./thunks";
import { completeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() =>{

        startLoadingTodos();

    },[]);
   const loadingMessage = <div>Loading Todos...</div>;
   
    const content = (
   
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo}  key={todo.id} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed} />)}
    </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});  

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed:  id => dispatch(completedTodoRequest(id)), 
});  

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);