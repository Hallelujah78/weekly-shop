import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import GlobalStyle from "./styles/GlobalStyles.ts";
import { ToastContainer, Bounce } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
    <App />
  </React.StrictMode>
);
