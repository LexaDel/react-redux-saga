import { put, takeEvery, all } from 'redux-saga/effects'
import { REQUEST_TODOLIST_SUCCEEDED, REQUEST_TODOLIST_FAILED, REQUEST_TODOLIST,
    DELETE_TODO_SUCCEEDED, DELETE_TODO_FAILED, DELETE_TODO } from './types';

function* fetchTodoList() {
    try {
        const todoList = yield fetch('/api/data').then(response => response.json());
        yield put({type: REQUEST_TODOLIST_SUCCEEDED, payload: todoList});
    } catch (e) {
        yield put({type: REQUEST_TODOLIST_FAILED, message: e.message});
    }
}

function* deleteTodo({todoId}) {
    try {
        const {STATE} = yield fetch(`/api/delete/${todoId}`, {
            method: 'DELETE'
          }).then(response => response.json());
        if (STATE === 'SUCCESS'){
            const todoList = yield fetch('/api/getData').then(response => response.json());
            yield put({type: DELETE_TODO_SUCCEEDED, payload: todoList});
        }
    } catch (e) {
        yield put({type: DELETE_TODO_FAILED, message: e.message});
    }
}


function* actionWatcher() {
    yield takeEvery(REQUEST_TODOLIST, fetchTodoList);
    yield takeEvery(DELETE_TODO, deleteTodo);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
 }