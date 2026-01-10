import { test, expect } from '@playwright/test'

test.describe('Portfolio Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#portfolio')
    await page.waitForLoadState('networkidle')
  })

  test('should display portfolio section', async ({ page }) => {
    const portfolioSection = page.locator('#portfolio')
    await expect(portfolioSection).toBeVisible()
  })

  test('should show TV series', async ({ page }) => {
    // Wait for lazy loaded content
    await page.waitForTimeout(1000)
    
    // Check for La Moderna (main series)
    const laModerna = page.locator('text=/La Moderna/i').first()
    await expect(laModerna).toBeVisible()
  })

  test('should show episode count', async ({ page }) => {
    await page.waitForTimeout(1000)
    
    // Check for episode information
    const episodeInfo = page.locator('text=/episodios?/i').first()
    await expect(episodeInfo).toBeVisible()
  })

  test('should have IMDb links', async ({ page }) => {
    await page.waitForTimeout(1000)
    
    const imdbLinks = page.locator('a[href*="imdb.com"]')
    const count = await imdbLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should display film section', async ({ page }) => {
    await page.waitForTimeout(1000)
    
    // Look for film-related content
    const filmSection = page.locator('text=/cine|películas?/i').first()
    await expect(filmSection).toBeVisible()
  })
})
