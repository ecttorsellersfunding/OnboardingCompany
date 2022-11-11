import type { Page } from 'playwright-core'

import { toApiResponse } from '@/mocks'

import type { Card } from '~/services/cardsService'

export const cardsHelper = async(page: Page, cardsMock?: Card[]) => {
  if (cardsMock) {
    await page.route('**/get-cards', route => route.fulfill({
      body: JSON.stringify(toApiResponse(cardsMock)),
      status: 200,
    }))
  }

  await page.goto('/boilerplate/cards')
  return {
    pageTitle: page.locator('text=Cards page title'),
    pageLoader: page.locator('[data-testid=cards-page-loader]'),
    getCarouselCard: (id: number) => page.locator(`[data-testid=cards-carousel] >> [data-testid=card-${id}]`),
    getTableCard: (id: number) => page.locator(`[data-testid=cards-table] >> [data-testid=card-${id}]`),
    goto: () => page.goto('/boilerplate/cards'),
  }
}
