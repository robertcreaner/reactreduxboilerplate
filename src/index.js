import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./js/redux/store";
import App from "./js/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);