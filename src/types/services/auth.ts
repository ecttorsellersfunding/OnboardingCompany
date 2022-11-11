import type { DefaultResponse } from '~/types'

export interface User {
  email: string
  emailConfirmed: boolean
  lastName: string
  name: string
  phoneNumber: string
  roles: string[]
  userId: string
}

export interface Login {
  expiration: string
  token: string
  user: User
}

export type LoginResponse = DefaultResponse<Login>

export interface Company {
  businessLegalName: string
  businessPhoneNumber: string
  businessPhysicalAddress: string
  city: string
  companyName: null | string
  country: string
  createdDate: string
  emailAddress: null | string
  federalTaxIdEIN: string
  hasTermsOfUse: boolean
  id: number
  isFBASeller: boolean
  ownBrandSeller: boolean
  stateProvince: string
  stateProvinceIncorporation: string
  trademarkBrand: boolean
  typeEntity: string
  userId: string
  webSite: null | string
  zipPostalCode: string
  externalId: string
}

export type CompanyResponse = DefaultResponse<Company[]>
