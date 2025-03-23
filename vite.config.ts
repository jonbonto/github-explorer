import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/github-explorer/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    coverage: {
      provider: "v8",
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/store/store.ts",
        "src/mocks/**",
        "src/**/*.test.tsx", 
        "dist/**",
        "vite.config.ts", 
        "eslint.config.js"
      ],
    },
  },
})
