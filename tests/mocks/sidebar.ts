import { toApiResponse } from '@/mocks'

export const sidebarMock = {
  company: {
    companyName: 'Test Automation Services',
    items: [
      {
        label: 'Change company',
        icon: 'fa-regular fa-repeat',
        url: '/Company/List',
        sort: 1,
        subItems: null,
      },
      {
        label: 'Manage company',
        icon: 'fa-regular fa-buildings',
        url: '/Company/Management',
        sort: 2,
        subItems: null,
      },
    ],
  },
  items: [
    {
      label: 'Dashboard',
      icon: 'fas fa-chart-bar',
      url: '/v2/dashboard',
      sort: 1,
      subItems: null,
    },
    {
      label: 'Daily Advance',
      icon: 'fas fa-calendar-day',
      url: '/v2/daily-advance',
      sort: 3,
      subItems: null,
    },
    {
      label: 'Working Capital',
      icon: 'fas fa-money-bill',
      url: '/WorkingCapital',
      sort: 4,
      subItems: null,
    },
    {
      label: 'Digital Wallet',
      icon: 'fad fa-wallet',
      url: '/digital-account/digital-wallet',
      sort: 5,
      subItems: null,
    },
    {
      label: 'Prepaid Business Card',
      icon: 'fas fa-fw fa-credit-card',
      url: '/digital-account/prepaid-business-card',
      sort: 6,
      subItems: null,
    },
    {
      label: 'Sellers Signals',
      icon: 'fas fa-chart-line',
      url: '/SellersSignalsStoreSelect/Index',
      sort: 7,
      subItems: null,
    },
    {
      label: 'VAT and GST',
      icon: 'fas fa-fw fa-calculator',
      url: '/applicationvat/index',
      sort: 8,
      subItems: null,
    },
    {
      label: 'Rewards',
      icon: 'fa-regular fa-trophy-star',
      url: '/rewards',
      sort: 9,
      subItems: null,
    },
    {
      label: 'Upload File',
      icon: 'fa-regular fa-upload',
      url: '/upload-file',
      sort: 10,
      subItems: null,
    },
  ],
}

export const sidebarResponseMock = toApiResponse(sidebarMock)
