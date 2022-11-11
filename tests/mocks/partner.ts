import { toApiResponse } from '@/mocks'

export const partnerMock = {
  primaryColor: '#0a2152',
  secondaryColor: '#e6b94c',
  helpCenterUrl: 'https://sellersfundinghelp.zendesk.com/hc/en-us',
  pageTitle: 'SellersFunding',
  tenantName: 'SF Dev',
  emailAddress: 'contact.dev@sellersfundingapp.com',
  showPowered: false,
  businessPhoneNumber: null,
  whitelabelSignals: false,
}

export const partnerResponseMock = toApiResponse(partnerMock)
