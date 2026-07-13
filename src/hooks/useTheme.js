import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const mq = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: light)") : null;

function readStoredTheme() {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    if (t === "light" || t === "dark") return t;
  } catch {
    /* ignore */
  }
  return null;
}

function effectiveThemeFromDom() {
  const root = document.documentElement;
  if (root.classList.contains("theme-light")) return "light";
  if (root.classList.contains("theme-dark")) return "dark";
  return mq?.matches ? "dark" : "light";
}

function syncMeta(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#059669" : "#10B981");
}

function applyThemeClass(theme) {
  const root = document.documentElement;
  root.classList.remove("theme-light", "theme-dark");
  if (theme) root.classList.add(`theme-${theme}`);
}

export function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme());
  const [effectiveTheme, setEffectiveTheme] = useState(() =>
    typeof document !== "undefined" ? effectiveThemeFromDom() : "light"
  );

  const sync = useCallback(() => {
    const effective = effectiveThemeFromDom();
    setEffectiveTheme(effective);
    syncMeta(effective);
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
    sync();
  }, [theme, sync]);

  useEffect(() => {
    if (!mq) return undefined;
    const onChange = () => sync();
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [sync]);

  const toggleTheme = useCallback(() => {
    const next = effectiveThemeFromDom() === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyThemeClass(next);
    const effective = effectiveThemeFromDom();
    setEffectiveTheme(effective);
    syncMeta(effective);
  }, []);

  return { theme, toggleTheme, effectiveTheme };
}
