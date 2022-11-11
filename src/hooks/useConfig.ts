import { partnerService, spaService } from '~/services'
import type { useConfigProps } from '~/types/hooks'

export const useConfig = async({
  managerInfo,
  partnerInfo,
  isServicesLoaded,
}: useConfigProps) => {
  if (import.meta.env.DEV) {
    isServicesLoaded.value = true
    return
  }
  await spaService.getJWT()
  managerInfo.value = await spaService.getManagerInfo()
  partnerInfo.value = await partnerService.getPartnerInfo()
  isServicesLoaded.value = true
}
