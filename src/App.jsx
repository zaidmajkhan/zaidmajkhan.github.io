import { useEffect } from "react";
import DirectorMap from "./components/director/DirectorMap.jsx";

/** Destiny Destinations–inspired Director hub (v2). */
export default function App() {
  useEffect(() => {
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
    window.scrollTo(0, 0);
  }, []);

  return <DirectorMap />;
}
