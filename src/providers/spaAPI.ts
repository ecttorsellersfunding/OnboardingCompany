import axios from 'axios'
import { useStorage } from '@vueuse/core'

import type { AxiosError } from 'axios'
import { changeRoute } from '~/helpers/vueRouter'

const instance = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
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

      if (import.meta.env.DEV) {
        const router = useRouter()
        router.push({ name: 'Login' })
        return
      }
      changeRoute('account/login')
    }

    return Promise.reject(error)
  },
)

export default instance
