import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/app/store";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement); 
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
