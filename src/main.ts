import { createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import singleSpaCss from 'single-spa-css'

import App from '~/App.vue'

import { useSPA } from '~/hooks'
import { mountApp } from '~/app'

import { MFE } from '~/constants'
import type { SingleSpaProps } from '~/types'

const { singleSPA, useLoader, singleSPAProps, useUser } = useSPA()

const cssUrl = `${MFE.URL}style.css?a=${Math.floor(Math.random() * 10000)}`

const cssLifecycles = singleSpaCss({
  cssUrls: import.meta.env.DEV ? [] : [cssUrl],
  webpackExtractedCss: false,
  shouldUnmount: false,
  timeout: 5000,
  createLink(url) {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href = url
    return linkEl
  },
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App)
    },
  },
  handleInstance: (app, { singleSpa, useLoader: useSPALoader, useUser: useSPAUser, ...props }: SingleSpaProps) => {
    singleSPA.value = singleSpa
    useLoader.value = useSPALoader
    useUser.value = useSPAUser
    singleSPAProps.value = props

    mountApp(app, !!props.portalName && props.portalName === MFE.NAME)
  },
})

export const bootstrap = [cssLifecycles.bootstrap, vueLifecycles.bootstrap]
export const mount = [cssLifecycles.mount, vueLifecycles.mount]
export const unmount = [vueLifecycles.unmount, cssLifecycles.unmount]
