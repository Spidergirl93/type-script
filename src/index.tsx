import React from "react";
import ReactDOM from "react-dom/client";

import TodoContexProvider from "./store/todos-context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TodoContexProvider>
    <App />
  </TodoContexProvider>
);
