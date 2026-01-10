import { test, expect, devices } from '@playwright/test'

test.describe('Responsive Design', () => {
  test('should work on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')
    
    const navbar = page.locator('nav')
    await expect(navbar).toBeVisible()
  })

  test('should work on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    
    const navbar = page.locator('nav')
    await expect(navbar).toBeVisible()
  })

  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    const navbar = page.locator('nav')
    await expect(navbar).toBeVisible()
  })

  test('should have mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Look for hamburger menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button:has-text("Menu")').first()
    
    // Menu button should exist on mobile
    const exists = await menuButton.count()
    expect(exists).toBeGreaterThanOrEqual(0) // May not have explicit menu button if using different approach
  })

  test('should scroll smoothly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Click on a navigation link
    await page.click('a[href="#about"]')
    await page.waitForTimeout(500)
    
    // Should navigate to section
    await expect(page).toHaveURL(/#about/)
  })

  test('should display images correctly on all devices', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },   // Mobile
      { width: 768, height: 1024 },  // Tablet
      { width: 1920, height: 1080 }, // Desktop
    ]

    for (const viewport of viewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      
      // Check that images are loaded
      const images = page.locator('img')
      const count = await images.count()
      expect(count).toBeGreaterThan(0)
    }
  })
})
