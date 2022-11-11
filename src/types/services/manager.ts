import type { InjectionKey, Ref } from 'vue'

export interface ManagerInfo {
  companyExternalId?: string
  companyId: number
  email: string
  lastName: string
  name: string
  userId: string
  claims: string[]
  isCompanyAdmin: boolean
  userRole?: string
}

export type ManagerInfoRef = Ref<ManagerInfo | null>
export const managerInfoKey: InjectionKey<ManagerInfoRef> = Symbol('managerInfoKey')
