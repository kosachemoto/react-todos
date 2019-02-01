import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoApp from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addTodo } from './actions';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const unsubscribe = store.subscribe(() => {
  console.log("store was changed:", store.getState());
});

store.dispatch(addTodo("Lol"));
store.dispatch(addTodo("Kek"));
store.dispatch(addTodo("Cheburek"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
