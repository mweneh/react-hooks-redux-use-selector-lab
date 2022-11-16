import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";
import {createStore} from "redux";
import {Provider} from "react-redux"
// add imports and code
const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
 <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById("root")
);
