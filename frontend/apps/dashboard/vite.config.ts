import { enhancedImages } from "@sveltejs/enhanced-img";
import adapter from "@sveltejs/adapter-bun";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      adapter: adapter(),
    }),
  ],
  envPrefix: ["VITE_", "PORT_"],
  server: {
    port: Number(process.env.PORT_DASHBOARD) || 5174,
    strictPort: true,
  },
});
