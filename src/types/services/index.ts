export * from './auth'
export * from './manager'
export * from './menu'
export * from './partner'

export interface DefaultResponse<T> {
  error: null | {
    message: string
  }
  isSuccess: boolean
  result: T
}
