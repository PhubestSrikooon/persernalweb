import { writable } from "svelte/store";

export const theme = writable("light");


export function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.set(savedTheme);
  }
}

export function saveTheme(value: string | null) {
  localStorage.setItem("theme", value ?? "auto");
  theme.set(value ?? "auto");
  updateTheme(value ?? "auto");
}

export function updateTheme(value: string) {
  document.documentElement.setAttribute("data-theme", value);
}