import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
