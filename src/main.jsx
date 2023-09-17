import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <title>
        TechGurus - Your Source for Tech Knowledge and Technology News
      </title>
      <meta
        name="description"
        content="TechGurus is a leading source for tech knowledge, technology news, and user advice. We provide you with unique insights and innovations in the field of technology."
      />
    </Helmet>
    <App />
  </React.StrictMode>
);
