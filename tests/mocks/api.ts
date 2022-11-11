import type { DefaultResponse } from '~/types'

export const toApiResponse = <T>(result: T): DefaultResponse<T> => ({
  result,
  error: null,
  isSuccess: true,
})
