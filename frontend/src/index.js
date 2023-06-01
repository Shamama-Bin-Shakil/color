import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StateHandle from "./context/StateHandle";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-11eyjkivu85f6d80.us.auth0.com"
    clientId="IArKsXAW9haD0Jz0J6avZJX440ScM65G"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StateHandle>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateHandle>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
