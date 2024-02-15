import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <BrowserRouter>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>

  // </BrowserRouter>
  // </React.StrictMode>,
);
