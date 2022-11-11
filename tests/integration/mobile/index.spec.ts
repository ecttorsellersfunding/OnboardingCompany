import { expect } from '@playwright/test'

import { browserTest } from '@/integration/fixtures'
import { indexHelper } from '@/integration/helpers'

browserTest.describe('Mobile Only', () => {
  browserTest('Should display label on mobile only', async({ page }) => {
    const { mobileOnlyLabel } = await indexHelper(page)

    await expect(mobileOnlyLabel).toBeVisible()
  })
})
