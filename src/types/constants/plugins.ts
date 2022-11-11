import type { ManagerInfo } from '~/types'

export interface Analytics {
  id: string
}

export interface UpdateAnalytics {
  sf: {
    userId: string
    email: string
    firstName: string
    lastName: string
  }
}

export interface GTM {
  id: string
}

export interface Hotjar {
  id: string
  snippetVersion: string
}

export interface UpdateHotjar {
  hj: (
    key: string,
    id: string,
    options: {
      user_id: string
      email: string
      name: string
    }
  ) => void
}

export interface Pendo {
  id: string
}

export interface UpdatePendo {
  pendo: {
    updateOptions: (options: {
      visitor: {
        id: string
        email: string
        name: string
        lastname: string
      }
    }) => void
  }
}

export interface SFPluginsProps {
  userInfo: ManagerInfo
  analytics?: Analytics
  gtm?: GTM
  hotjar?: Hotjar
  pendo?: Pendo
}
