import { toApiResponse } from '@/mocks'

export const navbarMock = {
  logoSmallUrl: 'https://mlsystemdiag.blob.core.windows.net/tenantfiles/9e55a793-9bb1-491e-bed3-65313d65e932/navbar-logo-small.svg',
  logoUrl: 'https://mlsystemdiag.blob.core.windows.net/tenantfiles/9e55a793-9bb1-491e-bed3-65313d65e932/logomenubar.svg',
  userName: 'TestAutomation Web',
  videos: [],
  userMenus: [
    {
      label: 'Manage user',
      icon: 'fa-user fa-fw',
      url: '/UserInfo',
    },
    {
      label: 'Sign out',
      icon: 'fa-sm fa-fw',
      url: '/Account/Logout',
    },
  ],
  messages: {
    count: 0,
    url: '/Request/Index',
  },
}

export const navbarResponseMock = toApiResponse(navbarMock)
