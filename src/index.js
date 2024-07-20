import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Function to render App component to a string
const renderAppToString = () => {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (typeof document !== "undefined") {
  // Client-side rendering
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Server-side rendering
  global.initialHtml = renderAppToString();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
