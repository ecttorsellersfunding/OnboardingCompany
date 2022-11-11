import type { Page } from 'playwright-core'

export const indexHelper = async(page: Page) => {
  await page.goto('/')
  return {
    pageTitle: page.locator('text=Welcome, TestAutomation'),
    pageDescription: page.locator('text=This is a boilerplate with Vue 3 script setup + Vite, please feel free to edit and give us your feedback'),
    mobileOnlyLabel: page.locator('[data-testid=mobileOnlyLabel]'),
    pcOnlyLabel: page.locator('[data-testid=pcOnlyLabel]'),
    cardsPageButton: page.locator('text=Cards Page'),
    formPageButton: page.locator('text=Form Page'),
    logoutButton: page.locator('text=Logout'),
    goto: () => page.goto('/'),
  }
}
