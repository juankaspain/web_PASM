import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display hero section', async ({ page }) => {
    await expect(
      page.locator('h1').filter({ hasText: /^Almagro San Miguel$/ })
    ).toBeVisible()
  })

  test('should have navigation menu', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Sobre mí/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Series TV/i }).first()).toBeVisible()
  })

  test('should navigate to series section', async ({ page }) => {
    await page.click('a[href="#series"]')
    await expect(page.locator('#series')).toBeInViewport()
  })

  test('should display portfolio projects', async ({ page }) => {
    await expect(page.getByText(/La Moderna/i).first()).toBeVisible()
  })

  test('should filter gallery by category', async ({ page }) => {
    await page.goto('/#gallery')

    const gallery = page.locator('#gallery')
    await expect(gallery).toBeInViewport()

    await gallery.getByRole('button', { name: /^Cine$/i }).click()
    await expect(gallery.getByText(/Cine/i).first()).toBeVisible()
  })

  test('should submit contact form', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Mensaje enviado' }),
      })
    })

    await page.click('a[href="#contact"]')
    await page.waitForSelector('form', { state: 'visible' })
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.selectOption('select[name="category"]', 'Consulta General')
    await page.fill('textarea[name="message"]', 'This is a test message from E2E tests.')
    await page.check('input[name="acceptPrivacy"]')
    await page.click('button[type="submit"]')

    await expect(page.getByText(/mensaje enviado/i)).toBeVisible()
  })
})
