import { defineConfig } from 'vite'

export default defineConfig({
  base: '/web',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        currency: 'currency.html',
        anime: 'anime.html',
        waifu: 'waifu.html',
      },
    },
  },
})
