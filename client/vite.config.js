import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "https://woo-ecommerce-server.onrender.com": {
        target: "https://woo-ecommerce-server.onrender.com",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  // server: {
  //   proxy: {
  //     "http://localhost:8080": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },

  plugins: [react()],
});
