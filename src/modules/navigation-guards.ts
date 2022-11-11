import { StorageSerializers } from '@vueuse/core'
import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router, managerInfo, partnerInfo, isLocal }) => {
  router.beforeEach((route) => {
    if (import.meta.env.DEV && isLocal) {
      const manager = useStorage('@seller-manager', null, sessionStorage, {
        serializer: StorageSerializers.object,
      })
      const token = useStorage('@seller-token', null)
      const partner = useStorage('@seller-partner', null, sessionStorage, {
        serializer: StorageSerializers.object,
      })

      if (
        (!manager.value || !token.value || !partner.value)
        && route.name !== 'Login'
      ) {
        router.push({ name: 'Login' })
      }
      else {
        managerInfo.value = manager?.value || null
        partnerInfo.value = partner?.value || null
      }
    }
    NProgress.start()
  })

  router.afterEach((route) => {
    if (!router.hasRoute(route.name ?? 'undefined'))
      window.location.href = `${window.location.origin}/error/404`

    NProgress.done()
    document.title = `SellersFunding - ${String(route.name)}`
  })
}
