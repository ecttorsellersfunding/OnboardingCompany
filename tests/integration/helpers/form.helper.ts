import type { Page } from 'playwright-core'

export const formHelper = async(page: Page) => {
  const email = page.locator('[data-testid=input-email]')
  const phone = page.locator('[data-testid=input-phone]')
  const password = page.locator('[data-testid=input-password]')
  const currency = page.locator('[data-testid=input-currency]')

  await page.goto('/boilerplate/form')
  return {
    pageTitle: page.locator('text=Form page title'),
    email,
    phone,
    password,
    currency,
    errorMessages: {
      emailError: page.locator('[data-testid=email] >> span[text=danger]'),
      phoneError: page.locator('[data-testid=phone] >> span[text=danger]'),
      passwordError: page.locator('[data-testid=password] >> span[text=danger]'),
      currencyError: page.locator('[data-testid=currency] >> span[text=danger]'),
    },
    submitButton: page.locator('[data-testid=submit]'),
    fillForm: async() => {
      await email.fill('test@test.com')
      await phone.fill('999000999909')
      await password.fill('Test@123')
      await currency.fill('2050')
    },
    fillFormInvalid: async() => {
      await email.fill('test123')
      await phone.fill('123')
      await password.fill('123')
      await currency.fill('-100000000')
    },
    goto: () => page.goto('/boilerplate/form'),
  }
}
