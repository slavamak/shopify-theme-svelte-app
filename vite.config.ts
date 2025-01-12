import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  return {
    build: {
      sourcemap: isProduction === false && 'inline',
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
          dev: isProduction === false,
        },
      }),
    ],
  }
})
