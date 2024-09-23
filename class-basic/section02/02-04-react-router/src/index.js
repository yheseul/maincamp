import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Board1 from "./routes/board1";

const pageList = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/board1", element: <Board1 /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={pageList} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
