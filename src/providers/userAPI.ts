import axios from 'axios'
import { useStorage } from '@vueuse/core'

import type { AxiosError } from 'axios'
import { removeEmptyKeysFromObject, config as vueConfig } from '~/helpers'

const instance = axios.create()

instance.interceptors.request.use(async(config) => {
  const requestParams = config.params
    ? removeEmptyKeysFromObject(config.params)
    : null

  config.baseURL = 'https://sf-api-gateway.azure-api.net/'

  return {
    ...config,
    ...(Boolean(requestParams) && { params: requestParams }),
    headers: {
      ...config.headers,
      'Ocp-Apim-Subscription-Key': vueConfig.APP_GATEWAY_KEY,
      'Authorization': `Bearer ${useStorage('@seller-token', '').value}`,
    },
  }
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    const status = error.response?.status

    if (status === 401) {
      const token = useStorage('@seller-token', '')
      token.value = ''
    }

    return Promise.reject(error)
  },
)

export default instance
