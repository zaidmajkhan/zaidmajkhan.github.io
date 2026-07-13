try {
  if (sessionStorage.getItem("introSeen")) {
    document.documentElement.classList.add("intro-seen");
  }
} catch {
  /* ignore */
}

try {
  const t = localStorage.getItem("theme");
  if (t === "light" || t === "dark") {
    document.documentElement.classList.add(`theme-${t}`);
  }
} catch {
  /* ignore */
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
