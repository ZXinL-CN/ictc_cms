import { defineConfig } from 'vite'

console.log(process.env);
export default defineConfig({
  define: {
    'process.env': process.env
  }
})
