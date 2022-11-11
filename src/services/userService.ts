import { userAPI } from '~/providers'

import type { CompanyResponse, LoginResponse } from '~/types'

const login = async(data: { email: string; password: string }) => {
  const {
    data: { result },
  } = await userAPI.post<LoginResponse>('/account/dev/authenticate', data)

  return result
}

const listCompany = async(userId: string) => {
  const {
    data: { result },
  } = await userAPI.get<CompanyResponse>(
    `/account-service/dev/company/list/${userId}`,
  )
  return result
}

export default { login, listCompany }
