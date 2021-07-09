import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovedPressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
        <button className="button completed-button">Complete</button>
        <button 
        onClick={() => onRemovedPressed(todo.text)}
        className="button delete-button">Delete</button>
        </div>
    </div>
)

export default TodoListItem;