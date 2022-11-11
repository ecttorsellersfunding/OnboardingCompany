import { chromium } from '@playwright/test'
import { authResponseMock, companyResponseMock, navbarResponseMock, partnerResponseMock, sidebarResponseMock } from '@/mocks'

async function globalSetup() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.route('**/account/dev/authenticate', route => route.fulfill({
    status: 200,
    body: JSON.stringify(authResponseMock),
  }))
  await page.route('**/account-service/dev/company/list/6b244a40-3e35-45cb-9b5c-ded066222e48', route => route.fulfill({
    status: 200,
    body: JSON.stringify(companyResponseMock),
  }))
  await page.route('**/partner', route => route.fulfill({
    status: 200,
    body: JSON.stringify(partnerResponseMock),
  }))
  await page.route('**/sidebar?companyId=6880', route => route.fulfill({
    status: 200,
    body: JSON.stringify(sidebarResponseMock),
  }))
  await page.route('**/navbar?companyId=6880', route => route.fulfill({
    status: 200,
    body: JSON.stringify(navbarResponseMock),
  }))

  await page.goto('http://localhost:3000')
  await page.locator('[data-testid=input-email] >> input').fill('djtestsf+999@gmail.com')
  await page.locator('[data-testid=input-password] >> input').fill('Teste@12')
  await page.locator('button >> text=Login').click()
  await page.locator('text=Welcome, TestAutomation').waitFor()

  await page.context().storageState({ path: 'tests/mocks/storage.json' })

  const session: string = await page.evaluate(() => JSON.stringify(sessionStorage))
  process.env.SESSION_STORAGE = session

  await browser.close()
}

export default globalSetup
