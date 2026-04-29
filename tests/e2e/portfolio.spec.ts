import { test, expect } from '@playwright/test'

test.describe('Portfolio Sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#series')
    await page.waitForLoadState('domcontentloaded')
  })

  test('should display series section', async ({ page }) => {
    await expect(page.locator('#series')).toBeVisible()
  })

  test('should show TV series', async ({ page }) => {
    await expect(page.locator('text=/La Moderna/i').first()).toBeVisible()
  })

  test('should show episode count', async ({ page }) => {
    await expect(page.locator('text=/episodios?/i').first()).toBeVisible()
  })

  test('should have IMDb links', async ({ page }) => {
    const imdbLinks = page.locator('a[href*="imdb.com"]')
    await expect(imdbLinks.first()).toBeVisible()
  })

  test('should display film section', async ({ page }) => {
    await page.goto('/#filmografia')
    await expect(page.locator('#filmografia')).toBeVisible()
    await expect(page.locator('text=/cine|películas?/i').first()).toBeVisible()
  })
})
