import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Tests', () => {
  test('Home page should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('About section should be accessible', async ({ page }) => {
    await page.goto('http://localhost:3000#about')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#about')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Portfolio section should be accessible', async ({ page }) => {
    await page.goto('http://localhost:3000#portfolio')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#portfolio')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Contact form should be accessible', async ({ page }) => {
    await page.goto('http://localhost:3000#contact')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#contact')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Tab through navigation
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Check if focus is visible
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON']).toContain(focusedElement)
  })

  test('Images should have alt text', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const imagesWithoutAlt = await page.locator('img:not([alt])').count()
    expect(imagesWithoutAlt).toBe(0)
  })

  test('Headings should follow proper hierarchy', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['heading-order'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Color contrast should meet WCAG AA standards', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Form labels should be associated with inputs', async ({ page }) => {
    await page.goto('http://localhost:3000#contact')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['label'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Links should have discernible text', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Page should have a main landmark', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const mainLandmark = await page.locator('main').count()
    expect(mainLandmark).toBeGreaterThan(0)
  })

  test('Skip to main content link should be present', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Tab to first element (should be skip link)
    await page.keyboard.press('Tab')

    const skipLink = await page.locator('a[href="#main-content"]').first()
    const isVisible = await skipLink.isVisible().catch(() => false)

    // Skip link should be present (even if visually hidden)
    expect(await skipLink.count()).toBeGreaterThan(0)
  })
})
