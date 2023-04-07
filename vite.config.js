import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
