import type { App, ComputedRef, InjectionKey, Ref } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'
import type { ManagerInfo, Partner } from '~/types'

export interface Configuration {
  [key: string]: string
  APP_HOTJAR_ID: string
  APP_HOTJAR_SNIPPET_VERSION: string
  APP_GTM_ID: string
  APP_PENDO_ID: string
  APP_ANALYTICS_ID: string
  APP_GATEWAY_KEY: string
  APP_API_URL: string
}

export const configKey: InjectionKey<Configuration> = Symbol('configKey')

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>
  router: HasRouter extends true ? Router : undefined
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined
  config: Configuration
  partnerInfo: Ref<Partner>
  managerInfo: Ref<ManagerInfo>
  isLocal: boolean
}

export type UserModule = (ctx: AppContext) => void

export const isCustomLoadingKey: InjectionKey<Ref<boolean>> = Symbol('isCustomLoadingKey')

export const isServicesLoadedKey: InjectionKey<Ref<boolean>> = Symbol('isServicesLoadedKey')

export interface LoaderReturn {
  isLoading: Ref<boolean>
  isLoadingMenu: Ref<boolean>
}

export interface UseUserReturn {
  managerInfo: ComputedRef<{
    companyExternalId?: string
    companyId: number
    email: string
    lastName: string
    name: string
    userId: string
  }>
}

export interface SingleSpaContext {
  NOT_LOADED: 'NOT_LOADED'
  LOADING_SOURCE_CODE: 'LOADING_SOURCE_CODE'
  NOT_BOOTSTRAPPED: 'NOT_BOOTSTRAPPED'
  BOOTSTRAPPING: 'BOOTSTRAPPING'
  NOT_MOUNTED: 'NOT_MOUNTED'
  MOUNTING: 'MOUNTING'
  UPDATING: 'UPDATING'
  LOAD_ERROR: 'LOAD_ERROR'
  MOUNTED: 'MOUNTED'
  UNMOUNTING: 'UNMOUNTING'
  SKIP_BECAUSE_BROKEN: 'SKIP_BECAUSE_BROKEN'
  addErrorHandler: (handler: any) => void
  checkActivityFunctions: (location: Location) => void
  ensureJQuerySupport: (jQuery: any /* default to window.jQuery if has jQuery */) => void
  getAppNames: () => string[]
  getAppStatus: (appName: string) => string
  getMountedApps: () => string[]
  mountRootParcel: () => void
  navigateToUrl: (obj: any) => void
  pathToActiveWhen: (path: string, exactMatch: string) => void
  registerApplication: (appNameOrConfig: string, appOrLoadApp: any, activeWhen: any, customProps: any) => any
  removeErrorHandler: (handler: any) => void
  setBootstrapMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
  setMountMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
  setUnloadMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
  setUnmountMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
  start: (opts: any) => void
  triggerAppChange: () => void
  unloadApplication: (appName: string, opts: any) => any
  unregisterApplication: (appName: string) => void
}

export interface SingleSpaProps {
  name: string
  portalName: string
  useLoader: () => LoaderReturn
  useUser: () => UseUserReturn
  mountParcel: () => void
  singleSpa: SingleSpaContext
}
