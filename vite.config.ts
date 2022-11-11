import { resolve } from 'path'
import { loadEnv } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    base: process.env.VITE_APP_MICRO_URL,
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        input: {
          main: 'src/main.ts',
          html: './index.html',
        },
        preserveEntrySignatures: 'strict',
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '~',
          replacement: resolve('src'),
        },
        {
          find: '@',
          replacement: resolve('tests'),
        },
      ],
    },
    plugins: [
      Vue(),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        routeBlockLang: 'yaml',
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          {
            'vue-query': ['useMutation'],
          },
          {
            '~/helpers': [
              'removeEmptyKeysFromObject',
              'useQuery',
              'useConfig',
            ],
          },
        ],
      }),
      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
        resolvers: [
          (name) => {
            if (name.startsWith('SF'))
              return { importName: name, path: 'sellers-funding-design-system-vite' }
          },
          (name) => {
            if (name.endsWith('Icon'))
              return { importName: name, path: 'sellers-funding-design-system-vite' }
          },
        ],
      }),
      WindiCSS(),
    ],
    server: {
      fs: {
        strict: true,
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core'],
    },
    test: {
      environment: 'jsdom',
      deps: {
        inline: ['@testing-library/vue'],
      },
      globals: true,
      coverage: {
        reporter: ['text', 'html'],
        include: ['src/**/*.{ts,vue}'],
        reportsDirectory: './coverage',
        lines: 50,
        functions: 50,
      },
      setupFiles: [
        'tests/vitest.setup.ts',
      ],
      exclude: ['tests/integration', ...(configDefaults.exclude || [])],
    },
  })
}
