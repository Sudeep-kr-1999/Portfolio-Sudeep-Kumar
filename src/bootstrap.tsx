import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./styles/global.css";

window.history.scrollRestoration = "manual";
window.history.replaceState(
  null,
  "",
  `${window.location.pathname}${window.location.search}`,
);
window.scrollTo({ top: 0, behavior: "instant" });

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Required app mount element "#root" was not found.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
