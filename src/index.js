import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate} from "react-router-dom";
import {Provider} from 'react-redux'
import App from "App";

// Soft UI Context Provider
import { ArgonControllerProvider } from "context";

// react-perfect-scrollbar component
import PerfectScrollbar from "react-perfect-scrollbar";

// react-perfect-scrollbar styles
import "react-perfect-scrollbar/dist/css/styles.css";
import Store from "Store/Store";
// const oth = useNavigate()
// const pathname  = useLocation();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ArgonControllerProvider>
      {/* <PerfectScrollbar> */}
       <Provider store={Store}>
       <App />
       </Provider>
      {/* </PerfectScrollbar> */}
    </ArgonControllerProvider>
  </BrowserRouter>
);
