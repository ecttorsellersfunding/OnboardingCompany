import { defineConfig, transform } from 'windicss/helpers'
import config from './node_modules/sellers-funding-design-system-vite/windicss'

export default defineConfig({
  ...config,
  plugins: [
    transform('tailwind-css-variables')(),
  ],
})
