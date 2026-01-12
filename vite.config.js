import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { promises as fs } from 'fs'

// https://vite.dev/config/
function copyDraco() {
  const src = path.resolve(__dirname, 'node_modules/three/examples/jsm/libs/draco')
  const dest = path.resolve(__dirname, 'public/draco')
  async function doCopy() {
    try {
      await fs.mkdir(dest, { recursive: true })
      const files = await fs.readdir(src)
      await Promise.all(
        files.map((f) => fs.copyFile(path.join(src, f), path.join(dest, f)))
      )
      // Optional: log once
      console.log('[copy-draco] Copied DRACO decoders to public/draco')
    } catch (e) {
      console.warn('[copy-draco] Skip copy:', e?.message || e)
    }
  }
  return {
    name: 'copy-draco',
    configureServer() {
      doCopy()
    },
    async buildStart() {
      await doCopy()
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyDraco(),
  ],
  base: process.env.VITE_BASE_PATH || '/portfolio',
  //base: '/',
  //during development, you might want to set base to '/' for easier testing and then switch to '/portfolio' for production builds
})
