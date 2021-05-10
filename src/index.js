import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./context/usersContext";

ReactDOM.render(
  <UsersContextProvider>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </UsersContextProvider>,
  document.getElementById("root")
);
