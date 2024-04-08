import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react";
import ContextMailProvider from "./components/pages/Context/ContextMail.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import NewsProvider from "./Context/NewsContext.jsx";

const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_CLIENTID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextMailProvider>
        <NewsProvider>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
        </NewsProvider>
      </ContextMailProvider>
    </BrowserRouter>
  </React.StrictMode>
);
