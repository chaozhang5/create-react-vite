import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'

export default defineConfig((config) => {
  const env: Partial<ImportMeta> = loadEnv(config.mode, process.cwd())

  return {
    define: {
      'process.env': env
    },
    server: {
      port: 3000,
      https: false // 需要开启https服务设置为true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      mkcert()
    ]
  }
})
