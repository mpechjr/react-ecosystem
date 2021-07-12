import React, { useEffect } from "react";
import  { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import styled from 'styled-components';
import {  
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos 
} from "./selectors";
import { completedTodoRequest, displayAlert } from "./thunks";
import { loadTodos, removeTodoRequest } from "./thunks";

const ListWrapper = styled.div`
max-width:700px;
margin:auto;
`;

const TodoList = ({ completedTodos, incompletedTodos, onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() =>{

        startLoadingTodos();

    },[]);
   const loadingMessage = <div>Loading Todos...</div>;
   
    const content = (
   
    <ListWrapper>
        <NewTodoForm />
        <h3>Incomplete</h3>
        {incompletedTodos.map(todo => <TodoListItem todo={todo}  key={todo.id} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed} />)}
        <h3>Completed</h3>       
        {completedTodos.map(todo => <TodoListItem todo={todo}  key={todo.id} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed} />)}
    </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
});  

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed:  id => dispatch(completedTodoRequest(id)), 
});  

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);