import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { createStore, compose, applyMiddleware } from 'redux';
import {todoList} from './store/store';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware()
let store = createStore(todoList, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);