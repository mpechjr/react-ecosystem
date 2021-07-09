import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovedPressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
        {todo.isCompleted 
        ? null
        :<button 
        onClick={() => onCompletedPressed(todo.text)}
        className="button completed-button">Complete</button>
        }
        <button 
        onClick={() => onRemovedPressed(todo.text)}
        className="button delete-button">Delete</button>
        </div>
    </div>
)

export default TodoListItem;