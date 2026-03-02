import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

import { LanguageProvider } from "./shared/i18n/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider defaultLang="en">
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
