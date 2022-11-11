import { expect } from '@playwright/test'

import { browserTest } from '@/integration/fixtures'
import { cardsHelper } from '@/integration/helpers'
import { cardListMock } from '@/mocks/cards'

browserTest.describe('Cards Page', () => {
  browserTest('Should display one card at a time inside the carousel', async({ page }) => {
    const { getCarouselCard, getTableCard } = await cardsHelper(page, cardListMock)

    await expect(getCarouselCard(1)).toBeVisible()
    await expect(getTableCard(1)).not.toBeVisible()
  })
})
