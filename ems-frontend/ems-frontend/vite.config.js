import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
base:"/" ,
  plugins: [react()],
 preview:{
 port: 5173,
 strictPort: true,

 },
  server: {
        port: 5173,      // Use Vite's default port
        strictPort: true, // Ensure the port doesn't change
        host: true,
        origin: "http://0.0.0:5173",
  },
});
