export const CREATE_TODO = 'CREATE_TODO';

//Action Creators
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
}); 

export const REMOVE_TODO = 'REMOVE_TODO';
 
export const removeTodo = text => ({ //change to id later
    type: REMOVE_TODO,
    payload: { text }
}); 

export const COMPLETE_TODO = 'COMPLETE_TODO';
 
export const completeTodo = text => ({ //change to id later
    type: COMPLETE_TODO,
    payload: { text }
}); 

//createTodo('example text');