import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const appAxe = (page: Page) => new AxeBuilder({ page }).exclude('iframe')

const waitForSection = async (page: Page, selector: string) => {
  const section = page.locator(selector)
  await section.scrollIntoViewIfNeeded()
  await expect(section).toBeVisible()
}

const waitForAppReady = async (page: Page) => {
  await page.waitForLoadState('domcontentloaded')
  await page.waitForTimeout(1000)
}

test.describe('Accessibility Tests', () => {
  test('Home page should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/')
    await waitForAppReady(page)

    const accessibilityScanResults = await appAxe(page)
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('About section should be accessible', async ({ page }) => {
    await page.goto('/#about')
    await waitForAppReady(page)
    await waitForSection(page, '#about')

    const accessibilityScanResults = await appAxe(page)
      .include('#about')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Series section should be accessible', async ({ page }) => {
    await page.goto('/#series')
    await waitForAppReady(page)
    await waitForSection(page, '#series')

    const accessibilityScanResults = await appAxe(page)
      .include('#series')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Contact form should be accessible', async ({ page }) => {
    await page.goto('/#contact')
    await waitForAppReady(page)
    await waitForSection(page, '#contact')

    const accessibilityScanResults = await appAxe(page)
      .include('#contact')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('/')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON']).toContain(focusedElement)
  })

  test('Images should have alt text', async ({ page }) => {
    await page.goto('/')
    await waitForAppReady(page)

    const imagesWithoutAlt = await page.locator('img:not([alt])').count()
    expect(imagesWithoutAlt).toBe(0)
  })

  test('Headings should follow proper hierarchy', async ({ page }) => {
    await page.goto('/')
    await waitForAppReady(page)

    const accessibilityScanResults = await appAxe(page)
      .withRules(['heading-order'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Color contrast should meet WCAG AA standards', async ({ page }) => {
    await page.goto('/')
    await waitForAppReady(page)

    const accessibilityScanResults = await appAxe(page)
      .withRules(['color-contrast'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Form labels should be associated with inputs', async ({ page }) => {
    await page.goto('/#contact')
    await waitForAppReady(page)
    await waitForSection(page, '#contact')

    const accessibilityScanResults = await appAxe(page)
      .include('#contact')
      .withRules(['label'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Links should have discernible text', async ({ page }) => {
    await page.goto('/')
    await waitForAppReady(page)

    const accessibilityScanResults = await appAxe(page).withRules(['link-name']).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Page should have a main landmark', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('main')).toHaveCount(1)
  })

  test('Skip to main content link should be present', async ({ page }) => {
    await page.goto('/')

    await page.keyboard.press('Tab')

    const skipLink = page.locator('a[href="#main-content"]').first()
    await expect(skipLink).toHaveCount(1)
  })
})
