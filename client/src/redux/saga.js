import { put, takeEvery, all } from 'redux-saga/effects'
import { REQUEST_TODOLIST_SUCCEEDED, REQUEST_TODOLIST_FAILED, REQUEST_TODOLIST } from './types';

function* fetchTodoList() {
    try {
        const todoList = yield fetch('/api/data').then(response => response.json());
        yield put({type: REQUEST_TODOLIST_SUCCEEDED, payload: todoList});
    } catch (e) {
        yield put({type: REQUEST_TODOLIST_FAILED, message: e.message});
    }
}

function* actionWatcher() {
    yield takeEvery(REQUEST_TODOLIST, fetchTodoList);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
 }