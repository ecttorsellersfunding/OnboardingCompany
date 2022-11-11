import { QueryClient } from 'vue-query'

import { configKey, managerInfoKey } from '~/types'

export default {
  VUE_QUERY_CLIENT: new QueryClient(),
  [managerInfoKey.valueOf()]: {
    companyExternalId: 'string',
    companyId: 1,
    email: 'string',
    lastName: 'string',
    name: 'string',
    userId: 'string',
    claims: [],
    isCompanyAdmin: true,
  },
  [configKey.valueOf()]: {
    APP_HOTJAR_ID: 'string',
    APP_HOTJAR_SNIPPET_VERSION: 'string',
    APP_GTM_ID: 'string',
    APP_PENDO_ID: 'string',
    APP_ANALYTICS_ID: 'string',
    APP_GATEWAY_KEY: 'string',
    APP_API_URL: 'string',
  },
}
