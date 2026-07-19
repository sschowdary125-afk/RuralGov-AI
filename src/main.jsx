import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApplicationProvider } from "./context/ApplicationContext";
import App from "./App.jsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(

<ApplicationProvider>

<BrowserRouter>

<App />

</BrowserRouter>

</ApplicationProvider>

);