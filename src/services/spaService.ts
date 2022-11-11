import { getUserRoleByClaims } from '~/helpers'
import { spaAPI } from '~/providers'

import type { ManagerInfo } from '~/types'

const getManagerInfo = async(): Promise<ManagerInfo | null> => {
  try {
    const { data } = await spaAPI.get<ManagerInfo>('/api/spa/manager')
    return {
      ...data,
      userRole: data.isCompanyAdmin ? 'admin' : getUserRoleByClaims(data.claims),
    }
  }
  catch (err) {
    console.error(`Not able to retrieve manager info. Error: ${err}`)
    return null
  }
}

const getJWT = async(): Promise<string | null> => {
  const token = useStorage('@seller-token', '')
  try {
    const { data } = await spaAPI.get<{ token: string }>(
      '/api/accountapi/jwt-token',
    )
    token.value = data.token
    return data.token
  }
  catch (err) {
    token.value = ''
    console.error(`Not able to retrieve JWT. Error: ${err}`)
    return null
  }
}

export default { getManagerInfo, getJWT }
