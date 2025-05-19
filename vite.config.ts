import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer"; // Optional: Analyze build size
import strip from "@rollup/plugin-strip"; // <- NEW: to remove console/debugger

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && strip({
      include: '**/*.(ts|tsx|js|jsx)',
      functions: ['console.*'], // Remove console.log, console.error, etc.
      debugger: true,
    }),
    mode === 'production' && visualizer({ open: false }), // Optional
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
