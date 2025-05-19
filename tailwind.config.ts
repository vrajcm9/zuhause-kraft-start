
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e2e8f0",
        input: "#f5f5f5",
        ring: "#1EAEDB",
        background: "#ffffff",
        foreground: "#1a1a1a",
        primary: {
          DEFAULT: "#1EAEDB",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F97316", 
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#33C3F0",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
