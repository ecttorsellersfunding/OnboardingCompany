import { expect } from '@playwright/test'

import { browserTest } from '@/integration/fixtures'
import { formHelper } from '@/integration/helpers'

browserTest.describe('Cards Page', () => {
  browserTest('Should render page', async({ page }) => {
    const { pageTitle } = await formHelper(page)

    await expect(pageTitle).toBeVisible()
  })

  browserTest('Should fill fields and submit them', async({ page }) => {
    const { fillForm, submitButton, currency } = await formHelper(page)

    await fillForm()

    expect(await currency.inputValue()).toBe('$20.50')
    await submitButton.click()

    page.once('dialog', dialog => dialog.accept())
    await page.evaluate('prompt()')
  })

  browserTest('Should display required field error messages', async({ page }) => {
    const { submitButton, errorMessages } = await formHelper(page)

    await submitButton.click()

    await expect(errorMessages.emailError).toBeVisible()
    expect(await errorMessages.emailError.textContent()).toBe('email is a required field')
    await expect(errorMessages.phoneError).toBeVisible()
    expect(await errorMessages.phoneError.textContent()).toBe('phone is a required field')
    await expect(errorMessages.passwordError).toBeVisible()
    expect(await errorMessages.passwordError.textContent()).toBe('password is a required field')
    await expect(errorMessages.currencyError).toBeVisible()
    expect(await errorMessages.currencyError.textContent()).toBe('currency is a required field')
  })

  browserTest('Should display error messages when fields are filled', async({ page }) => {
    const { errorMessages, fillFormInvalid } = await formHelper(page)

    await fillFormInvalid()

    await expect(errorMessages.emailError).toBeVisible()
    expect(await errorMessages.emailError.textContent()).toBe('Please insert a valid email')
    await expect(errorMessages.phoneError).toBeVisible()
    expect(await errorMessages.phoneError.textContent()).toBe('Phone number is not valid')
    await expect(errorMessages.passwordError).toBeVisible()
    expect(await errorMessages.passwordError.textContent()).toBe('Password must be at least 8 characters')
    await expect(errorMessages.currencyError).toBeVisible()
    expect(await errorMessages.currencyError.textContent()).toBe('Min value is -10000')
  })
})
