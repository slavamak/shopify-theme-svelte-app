import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector'
import { defineConfig } from 'vite'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
  build: {
    outDir: './assets',
    manifest: false,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: './frontend/main.ts',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: production === false,
      },
    }),
    svelteInspector(),
  ],
})
