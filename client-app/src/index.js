import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import './styles/styles.scss'
import { rootReducer } from "./store";
import Routes from './routes';

// Configure Redux store
const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector("#root")
);
