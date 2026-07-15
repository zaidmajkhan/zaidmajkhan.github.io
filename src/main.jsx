import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

try {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
} catch {
  /* ignore */
}

createRoot(document.getElementById("root")).render(<App />);
