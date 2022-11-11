import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./tests/playwright.setup.ts'),
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    storageState: 'tests/mocks/storage.json',
  },
  webServer: {
    command: 'yarn dev',
    port: 3000,
  },
  projects: [
    {
      name: 'web',
      testDir: 'tests/integration/web',
      use: {
        ...devices['Desktop Chrome'],
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'mobile',
      testDir: 'tests/integration/mobile',
      use: {
        ...devices['Pixel 5'],
        ...devices['iPhone 12'],
      },
    },
  ],
}

export default config
