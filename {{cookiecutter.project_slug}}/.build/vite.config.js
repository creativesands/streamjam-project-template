import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
      proxy: {
        "/_sjsocket": {
          target: "ws://127.0.0.1:7755",
          ws: true,
        },
      },
    },
})
