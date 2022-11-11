import type { Ref } from 'vue'
import type { ManagerInfoRef, PartnerRef } from '~/types'

export interface useConfigProps {
  managerInfo: ManagerInfoRef
  partnerInfo: PartnerRef
  isServicesLoaded: Ref<boolean>
}
