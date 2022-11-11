import { expect } from '@playwright/test'

import { browserTest } from '@/integration/fixtures'

import { cardsHelper } from '@/integration/helpers'
import { cardListMock } from '@/mocks/cards'

browserTest.describe('Cards Page', () => {
  browserTest('Should render page', async({ page }) => {
    const { pageTitle } = await cardsHelper(page)

    await expect(pageTitle).toBeVisible()
  })

  browserTest('Should display all cards from table', async({ page }) => {
    const { getTableCard, getCarouselCard } = await cardsHelper(page, cardListMock)

    await expect(getTableCard(1)).toBeVisible()
    await expect(getTableCard(2)).toBeVisible()
    await expect(getTableCard(3)).toBeVisible()
    await expect(getTableCard(4)).toBeVisible()

    await expect(getCarouselCard(1)).not.toBeVisible()
  })
})
