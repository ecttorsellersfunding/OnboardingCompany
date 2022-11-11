import { mainAPI } from '~/providers'

import type { DefaultResponse, Partner } from '~/types'

const getPartnerInfo = async() => {
  const {
    data: { result },
  } = await mainAPI.get<DefaultResponse<Partner>>('/partner')
  return result
}

export default { getPartnerInfo }
