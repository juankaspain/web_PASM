import { test, expect } from '@playwright/test'

test.describe('Performance', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    const loadTime = Date.now() - startTime

    expect(loadTime).toBeLessThan(10000)
  })

  test('should lazy load filmography sections', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText(/Almagro San Miguel/i).first()).toBeVisible({
      timeout: 2000,
    })

    await page.evaluate(() => window.scrollTo(0, 2400))
    await page.waitForTimeout(500)

    await expect(page.locator('#series')).toBeVisible()
  })

  test('should not have console errors', async ({ page }) => {
    const errors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(2000)

    const relevantErrors = errors.filter(
      (error) =>
        !error.includes('favicon') &&
        !error.includes('chrome-extension') &&
        !error.includes('Google Analytics')
    )

    expect(relevantErrors).toEqual([])
  })

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/')

    const title = await page.title()
    expect(title.length).toBeGreaterThan(0)

    const description = await page
      .locator('meta[name="description"]')
      .getAttribute('content')
    expect(description).toBeTruthy()
    expect(description?.length).toBeGreaterThan(50)

    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute('content')
    expect(ogTitle).toBeTruthy()
  })

  test('should have working external links', async ({ page }) => {
    await page.goto('/')

    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()

    expect(count).toBeGreaterThan(0)

    const href = await externalLinks.first().getAttribute('href')
    expect(href).toBeTruthy()
    expect(href?.startsWith('http')).toBe(true)
  })
})
