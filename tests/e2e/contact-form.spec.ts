import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Mensaje enviado con éxito',
        }),
      })
    })

    await page.goto('/#contact')
    await page.waitForSelector('form', { state: 'visible' })
  })

  test('should display contact form', async ({ page }) => {
    await expect(
      page.getByRole('form', { name: /formulario de contacto/i })
    ).toBeVisible()
  })

  test('should have all required form fields', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('select[name="category"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
    await expect(page.locator('input[name="acceptPrivacy"]')).toBeVisible()
  })

  test('should show validation for empty fields', async ({ page }) => {
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('input[name="name"]')).toBeFocused()
  })

  test('should validate email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'invalid-email')
    await page.fill('textarea[name="message"]', 'Test message')
    await page.check('input[name="acceptPrivacy"]')

    await page.locator('button[type="submit"]').click()

    const isInvalid = await page
      .locator('input[name="email"]')
      .evaluate((el: HTMLInputElement) => !el.validity.valid)
    expect(isInvalid).toBe(true)
  })

  test('should fill and submit form successfully', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.selectOption('select[name="category"]', 'Consulta General')
    await page.fill('textarea[name="message"]', 'This is a test message from E2E tests.')
    await page.check('input[name="acceptPrivacy"]')

    await page.click('button[type="submit"]')

    await expect(page.getByText(/mensaje enviado/i)).toBeVisible()
  })

  test('should display contact information', async ({ page }) => {
    const contact = page.locator('#contact')
    await expect(
      contact.getByRole('link', { name: /info@almagrosanmiguel.com/i })
    ).toBeVisible()
    await expect(contact.getByText(/Sevilla/i).first()).toBeVisible()
  })

  test('should have character counter for message', async ({ page }) => {
    await page.fill('textarea[name="message"]', 'Test message')

    await expect(page.getByText(/\/\s*2000/)).toBeVisible()
  })
})
