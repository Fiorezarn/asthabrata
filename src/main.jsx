import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store"; // Pastikan path ini sesuai dengan lokasi store Anda

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
