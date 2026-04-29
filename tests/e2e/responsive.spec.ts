import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test('should work on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')

    await expect(page.locator('nav')).toBeVisible()
  })

  test('should work on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    await expect(page.locator('nav')).toBeVisible()
  })

  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await expect(page.locator('nav')).toBeVisible()
  })

  test('should have mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /menú|menu/i })
    await expect(menuButton).toBeVisible()

    await menuButton.click()
    await expect(page.getByRole('dialog', { name: /menú|menu/i })).toBeVisible()
  })

  test('should scroll smoothly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await page.getByRole('button', { name: /menú|menu/i }).click()
    await page
      .getByRole('dialog', { name: /menú|menu/i })
      .locator('a[href="#about"]')
      .click()
    await page.waitForTimeout(500)

    await expect(page).toHaveURL(/#about/)
  })

  test('should display images correctly on all devices', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 },
    ]

    for (const viewport of viewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      await expect(page.locator('img').first()).toBeVisible()
    }
  })
})
