import { mainAPI } from '~/providers'
import type { DefaultResponse } from '~/types'

export interface Card {
  id: number
  title: string
}

const getCards = async() => {
  const { data: { result } } = await mainAPI.get<DefaultResponse<Card[]>>('/get-cards')
  return result
}

export default {
  getCards,
}
