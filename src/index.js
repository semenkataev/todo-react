import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "mobx-react";
import TodoStore from "./stores/TodoStore";

const Root = (
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("main"));
registerServiceWorker();
