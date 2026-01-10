import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Almagro San Miguel/i)
  })

  test('should have visible navbar', async ({ page }) => {
    const navbar = page.locator('nav')
    await expect(navbar).toBeVisible()
  })

  test('should navigate to About section', async ({ page }) => {
    await page.click('a[href="#about"]')
    await page.waitForTimeout(500) // Wait for smooth scroll
    await expect(page).toHaveURL(/#about/)
  })

  test('should navigate to Portfolio section', async ({ page }) => {
    await page.click('a[href="#portfolio"]')
    await page.waitForTimeout(500)
    await expect(page).toHaveURL(/#portfolio/)
  })

  test('should navigate to Contact section', async ({ page }) => {
    await page.click('a[href="#contact"]')
    await page.waitForTimeout(500)
    await expect(page).toHaveURL(/#contact/)
  })

  test('should have all main navigation links', async ({ page }) => {
    const links = [
      'a[href="#about"]',
      'a[href="#portfolio"]',
      'a[href="#skills"]',
      'a[href="#contact"]',
    ]

    for (const link of links) {
      await expect(page.locator(link).first()).toBeVisible()
    }
  })

  test('should have working footer links', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    
    // Check for social media links
    const socialLinks = footer.locator('a[target="_blank"]')
    const count = await socialLinks.count()
    expect(count).toBeGreaterThan(0)
  })
})
