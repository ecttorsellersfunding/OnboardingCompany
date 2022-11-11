import { toApiResponse } from '@/mocks'

const generateCards = (cardNumber: number) => {
  const mockCards = []
  for (let i = 0; i < cardNumber; i++) {
    mockCards.push({
      id: i + 1,
      title: `Card Title ${i + 1}`,
    })
  }
  return mockCards
}
export const cardListMock = generateCards(4)
export const cardListResponseMock = toApiResponse(cardListMock)
