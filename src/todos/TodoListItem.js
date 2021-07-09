import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
        <button className="button completed-button">Complete</button>
        <button className="button delete-button">Delete</button>
        </div>
    </div>
)

export default TodoListItem;