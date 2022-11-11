import type { Configuration } from '~/types'

export const config: Configuration = {
  APP_HOTJAR_ID: import.meta.env.VITE_APP_HOTJAR_ID as string,
  APP_HOTJAR_SNIPPET_VERSION: import.meta.env
    .VITE_APP_HOTJAR_SNIPPET_VERSION as string,
  APP_GTM_ID: import.meta.env.VITE_APP_GTM_ID as string,
  APP_PENDO_ID: import.meta.env.VITE_APP_PENDO_ID as string,
  APP_ANALYTICS_ID: import.meta.env.VITE_APP_ANALYTICS_ID as string,
  APP_GATEWAY_KEY: import.meta.env.VITE_APP_GATEWAY_KEY as string,
  APP_API_URL: import.meta.env.VITE_APP_API_URL as string,
  APP_MICRO_URL: import.meta.env.VITE_APP_MICRO_URL as string,
}
