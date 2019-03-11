import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import todoApp from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { addTodo } from './actions';
import { Root } from './components';
import { createLogger } from 'redux-logger';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let loggerMiddleware = createLogger();

let store = createStore(
    todoApp,
    composeEnhancers(
      applyMiddleware(
        loggerMiddleware
      )
    )
  );

store.dispatch(addTodo("Lol"));
store.dispatch(addTodo("Kek"));
store.dispatch(addTodo("Cheburek"));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
