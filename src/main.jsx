import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
