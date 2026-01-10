import { test, expect } from '@playwright/test'

test.describe('Performance', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    const loadTime = Date.now() - startTime

    // Page should load in less than 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('should lazy load sections', async ({ page }) => {
    await page.goto('/')
    
    // Check that hero is immediately visible
    const hero = page.locator('text=/Almagro San Miguel/i').first()
    await expect(hero).toBeVisible({ timeout: 2000 })
    
    // Scroll down to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, 2000))
    await page.waitForTimeout(500)
    
    // Portfolio should be loaded after scroll
    const portfolio = page.locator('#portfolio')
    await expect(portfolio).toBeVisible()
  })

  test('should not have console errors', async ({ page }) => {
    const errors: string[] = []
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Filter out known third-party errors
    const relevantErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('chrome-extension') &&
      !error.includes('Google Analytics')
    )
    
    expect(relevantErrors.length).toBe(0)
  })

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/')
    
    // Check for essential meta tags
    const title = await page.title()
    expect(title.length).toBeGreaterThan(0)
    
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(50)
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    expect(ogTitle).toBeTruthy()
  })

  test('should have working external links', async ({ page, context }) => {
    await page.goto('/')
    
    // Get all external links
    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()
    
    expect(count).toBeGreaterThan(0)
    
    // Check first external link
    if (count > 0) {
      const firstLink = externalLinks.first()
      const href = await firstLink.getAttribute('href')
      expect(href).toBeTruthy()
      expect(href!.startsWith('http')).toBe(true)
    }
  })
})
