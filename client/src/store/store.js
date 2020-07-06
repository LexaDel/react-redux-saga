import { REQUEST_TODOLIST_SUCCEEDED } from "../redux/types";

export const todoList = (state = {}, action) => { 
    switch(action.type) {
        case REQUEST_TODOLIST_SUCCEEDED:
            return { ...state, todos: action.payload }
        default: return state;
    }
    
}