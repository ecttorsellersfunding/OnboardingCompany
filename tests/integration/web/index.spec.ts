import { expect } from '@playwright/test'

import { browserTest } from '@/integration/fixtures'
import { indexHelper } from '@/integration/helpers'

browserTest.describe('Index page', () => {
  browserTest('Should render page', async({ page }) => {
    const { pageTitle, pageDescription } = await indexHelper(page)

    await expect(pageTitle).toBeVisible()
    await expect(pageDescription).toBeVisible()
  })

  browserTest('Should logout', async({ page }) => {
    const { logoutButton, goto } = await indexHelper(page)
    await logoutButton.click()
    await goto()

    await expect(logoutButton).not.toBeVisible()
  })

  browserTest('Should redirect user to Cards Page', async({ page }) => {
    const { cardsPageButton } = await indexHelper(page)
    await cardsPageButton.click()

    await expect(page.locator('text=Cards page title')).toBeVisible()
  })

  browserTest('Should redirect user to Form Page', async({ page }) => {
    const { formPageButton } = await indexHelper(page)
    await formPageButton.click()

    await expect(page.locator('text=Form page title')).toBeVisible()
  })

  browserTest('Should display label on desktop only', async({ page }) => {
    const { pcOnlyLabel } = await indexHelper(page)

    await expect(pcOnlyLabel).toBeVisible()
  })
})
