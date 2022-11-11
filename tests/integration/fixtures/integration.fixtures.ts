import type { BrowserContext } from '@playwright/test'
import { test as baseTest } from '@playwright/test'
import { navbarResponseMock, sidebarResponseMock } from '@/mocks'

const setSessionStorage = async(browser: BrowserContext) => {
  const session = process.env.SESSION_STORAGE
  if (session) {
    await browser.addInitScript((storage: any) => {
      const entries = JSON.parse(storage)
      for (const [key, value] of Object.entries(entries))
        window.sessionStorage.setItem(key, value as string)
    }, session)
  }
}

// Custom test fixture that mocks sessions storage before each spec
export const browserTest = baseTest.extend({
  context: async({ context }, use) => {
    await setSessionStorage(context)
    await use(context)
  },
  page: async({ page }, use) => {
    await page.route('**/sidebar?companyId=6880', route => route.fulfill({
      status: 200,
      body: JSON.stringify(sidebarResponseMock),
    }))
    await page.route('**/navbar?companyId=6880', route => route.fulfill({
      status: 200,
      body: JSON.stringify(navbarResponseMock),
    }))
    use(page)
  },
})
