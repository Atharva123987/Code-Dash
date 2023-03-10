import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameRoom from "./pages/codeEditor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		<GameRoom />
	</React.StrictMode>
);
