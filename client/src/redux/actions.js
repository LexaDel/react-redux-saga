import { REQUEST_TODOLIST, DELETE_TODO } from "./types";

export const fetchTodos = () => ({
    type: REQUEST_TODOLIST,
});

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    todoId
});