import { toApiResponse } from '@/mocks'

export const companyMock = [
  {
    id: 6880,
    federalTaxIdEIN: '12-3456789',
    createdDate: '2022-02-23T15:43:33.6266667',
    companyName: null,
    businessLegalName: 'Test Automation Services',
    country: 'US',
    typeEntity: 'Corporation',
    stateProvinceIncorporation: 'MI',
    businessPhysicalAddress: 'Miami Street 96',
    city: 'Miami',
    zipPostalCode: '12345',
    businessPhoneNumber: '+12015555555',
    emailAddress: null,
    webSite: null,
    userId: '6b244a40-3e35-45cb-9b5c-ded066222e48',
    isFBASeller: false,
    stateProvince: 'MI',
    trademarkBrand: false,
    ownBrandSeller: false,
    hasTermsOfUse: true,
    externalId: '68f1f0cb-93c5-4fa7-944a-b5a600b60b19',
  },
]

export const companyResponseMock = toApiResponse(companyMock)
