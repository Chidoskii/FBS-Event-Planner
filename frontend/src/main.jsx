import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "./css/index.css";
import "./css/theme.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RouteProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RouteProvider>
    </StrictMode>
  </BrowserRouter>,
);
