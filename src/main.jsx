import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/ProductReducer.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import ProductDetail from "./pages/landingpage/productDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
