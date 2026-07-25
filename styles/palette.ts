// Brand colour palette — single source of truth for canvas / WebGL colours.
// Mirrors the --purple-* tokens in styles/theme.css.

export const purple = [
  "#e0aaff", // --purple-100
  "#c77dff", // --purple-200
  "#9d4edd", // --purple-300
  "#7b2cbf", // --purple-400
  "#5a189a", // --purple-500
] as const;

// Shared hover / accent colour used across the UI.
export const hover = "#9d4edd";
