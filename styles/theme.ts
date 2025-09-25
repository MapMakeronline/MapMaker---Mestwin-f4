"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    mode: "dark", // Default to dark, but will be overridden by system preference
    primary: {
      main: "#3b82f6", // blue-500
      light: "#60a5fa", // blue-400
      dark: "#1d4ed8", // blue-700
    },
    secondary: {
      main: "#64748b", // slate-500
      light: "#94a3b8", // slate-400
      dark: "#334155", // slate-700
    },
    background: {
      default: "#0f172a", // slate-900
      paper: "#1e293b", // slate-800
    },
    text: {
      primary: "#f8fafc", // slate-50
      secondary: "#cbd5e1", // slate-300
    },
    divider: "#334155", // slate-700
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          minWidth: "auto",
          padding: "12px",
          "&.MuiButton-text": {
            "&:hover": {
              backgroundColor: "rgba(100, 116, 139, 0.1)", // secondary/10
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px",
          "&:hover": {
            backgroundColor: "rgba(100, 116, 139, 0.1)", // secondary/10
          },
        },
      },
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3b82f6", // blue-500
      light: "#60a5fa", // blue-400
      dark: "#1d4ed8", // blue-700
    },
    secondary: {
      main: "#64748b", // slate-500
      light: "#94a3b8", // slate-400
      dark: "#334155", // slate-700
    },
    background: {
      default: "#ffffff", // white
      paper: "#f8fafc", // slate-50
    },
    text: {
      primary: "#0f172a", // slate-900
      secondary: "#475569", // slate-600
    },
    divider: "#e2e8f0", // slate-200
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          minWidth: "auto",
          padding: "12px",
          "&.MuiButton-text": {
            "&:hover": {
              backgroundColor: "rgba(100, 116, 139, 0.1)", // secondary/10
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px",
          "&:hover": {
            backgroundColor: "rgba(100, 116, 139, 0.1)", // secondary/10
          },
        },
      },
    },
  },
})
