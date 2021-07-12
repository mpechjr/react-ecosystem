import { 
    COMPLETE_TODO, 
    CREATE_TODO, 
    REMOVE_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
 } from "./actions";



/*
    state.todos: {
        isLoading: true,
        data: [...]
    }
*/

const initialState = {isLoading: false, data:[]}

export const todos = (state = initialState, action) => { //set default to empty array
    const { type, payload } =  action;

    switch(type) {
        case CREATE_TODO: {
            const { todo } = payload;
          
            return {
                ...state,
                data: state.data.concat(todo)
            }
        }
        case REMOVE_TODO: {
            const { todo:todoToRemove } = payload; //add a nickname todoToRemove
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id)
            }
        }
        case COMPLETE_TODO: {
            const { todo:todoToComplete } = payload;
             
            return {
                ...state,
                data: state.data.map(todo => {
                if(todo.id === todoToComplete.id){
                    return { ...todo, isCompleted:true}
                }
                return todo;
            }),
        }
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } =  payload ;
            return {
                ...state, //use spread operator
                isLoading: false,
                data: todos
            }

            
        }
        case LOAD_TODOS_IN_PROGRESS:  
            return {
                ...state,
                isLoading:true,
            }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading:false,
            }  
        default:
            return state;
    } 
}

