import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const keepReactNavigation = (request) =>
  request.headers.accept?.includes('text/html') ? '/index.html' : undefined

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/listings': {
        target: 'http://localhost:7000',
        bypass: keepReactNavigation,
      },
      '/login': {
        target: 'http://localhost:7000',
        bypass: keepReactNavigation,
      },
      '/signup': {
        target: 'http://localhost:7000',
        bypass: keepReactNavigation,
      },
      '/logout': {
        target: 'http://localhost:7000',
        bypass: keepReactNavigation,
      },
      '/api': { target: 'http://localhost:7000', bypass: keepReactNavigation },
    },
  },
})
