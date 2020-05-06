import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, updatePost, subscribe} from './redux/State'

//41 -12

export let rerenderEntireTree = (state) => {
  debugger;
ReactDOM.render(
  <React.StrictMode>

    <App store={store} />

  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state=store.getState();
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
