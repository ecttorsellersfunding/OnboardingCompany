import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { StorageSerializers } from '@vueuse/core'

import type { App } from 'vue'
import type { ManagerInfo, PartnerRef } from '~/types'
import { configKey, isServicesLoadedKey, managerInfoKey, partnerKey } from '~/types'

import { config } from '~/helpers'
import { useConfig } from '~/hooks'
import { MFE } from '~/constants'

import 'virtual:windi.css'
import '../node_modules/sellers-funding-design-system-vite/dist/style.css'

export const appendIcon = () => {
  const icon = document.createElement('link')
  icon.rel = 'icon'
  icon.href = `${MFE.URL}favicon.ico`

  document.head.appendChild(icon)
}

export const mountApp = (app: App, isLocal: boolean) => {
  const routes = setupLayouts(
    import.meta.env.DEV
      ? generatedRoutes
      : generatedRoutes.filter(item => item.name !== 'Login'),
  )
  routes.push({ path: '/:catchAll(.*)', redirect: { name: 'Boilerplate' } })
  const router = createRouter({ history: createWebHistory(), routes })

  const managerInfo = useStorage<ManagerInfo | null>('@seller-manager', null, sessionStorage, { serializer: StorageSerializers.object })
  const partnerInfo: PartnerRef = ref(null)
  const isServicesLoaded = ref(false)

  app.use(router)
  app.provide(configKey, config)
  app.provide(managerInfoKey, managerInfo)
  app.provide(partnerKey, partnerInfo)
  app.provide(isServicesLoadedKey, isServicesLoaded)

  if (isLocal) {
    appendIcon()
    useConfig({ managerInfo, partnerInfo, isServicesLoaded })
  }

  Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
    i.install?.({ app, router, routes, config, partnerInfo, managerInfo, isLocal }),
  )
}
