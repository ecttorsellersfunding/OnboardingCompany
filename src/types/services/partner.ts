import type { InjectionKey, Ref } from 'vue'
import type { DefaultResponse } from '~/types'

export interface Partner {
  businessPhoneNumber?: string | null
  emailAddress?: string
  helpCenterUrl?: string
  pageTitle?: string
  primaryColor?: string
  secondaryColor?: string
  showPowered: boolean
  tenantName?: string
}

export type PartnerRef = Ref<Partner | null>
export const partnerKey: InjectionKey<Ref<Partner>> = Symbol('partnerKey')

export type PartnerResponse = DefaultResponse<Partner>
