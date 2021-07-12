import React, { useState } from 'react';
import { connect } from 'react-redux'; //higher order function connect()()
import { addTodoRequest } from './thunks';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    
    return (
    <div className="new-todo-form">
        <input 
        className="new-todo-input" 
        type="text"
        placeholder="Type your new ToDo here."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
        <button 
         onClick={() => {
            const isDuplicateText =
                todos.some(todo => todo.text === inputValue);
            if (!isDuplicateText) {
                onCreatePressed(inputValue);
                setInputValue('');
            }
        }}
        className="new-todo-button">Create Todo</button>
    </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
}); //object state represents redux state and returns pieces of state that this component needs access to

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
}); //similar to above. Instead of redux state it takes dispatch (fxn that allows components to trigger actions that redux state will respond to). For example when someone clicks button

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);

