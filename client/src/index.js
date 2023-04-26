import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameRoom from "./pages/codeEditor";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Auth0Provider
    domain="dev-6wqt6vshdv33ddig.au.auth0.com"
    clientId="rn1ztr8MqpQ9qN0YcOy7DAFQ1qq3uVJE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
		<App />
		</Auth0Provider>
);
