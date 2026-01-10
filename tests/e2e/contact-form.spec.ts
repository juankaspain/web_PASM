import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact')
    await page.waitForSelector('form', { state: 'visible' })
  })

  test('should display contact form', async ({ page }) => {
    const form = page.locator('form')
    await expect(form).toBeVisible()
  })

  test('should have all required form fields', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('select[name="category"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
  })

  test('should show validation for empty fields', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // HTML5 validation should prevent submission
    const nameInput = page.locator('input[name="name"]')
    await expect(nameInput).toBeFocused()
  })

  test('should validate email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'invalid-email')
    await page.fill('textarea[name="message"]', 'Test message')
    
    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // Email input should be focused due to validation
    const emailInput = page.locator('input[name="email"]')
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid)
    expect(isInvalid).toBe(true)
  })

  test('should fill and submit form successfully', async ({ page }) => {
    // Fill form with valid data
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.selectOption('select[name="category"]', 'Consulta General')
    await page.fill('textarea[name="message"]', 'This is a test message from E2E tests.')

    // Submit form
    await page.click('button[type="submit"]')

    // Wait for success message or loading state
    await page.waitForTimeout(2000)

    // Check for either success message or sending state
    const hasSuccessMessage = await page.locator('text=/mensaje enviado/i').isVisible().catch(() => false)
    const hasSendingState = await page.locator('text=/enviando/i').isVisible().catch(() => false)
    
    expect(hasSuccessMessage || hasSendingState).toBe(true)
  })

  test('should display contact information', async ({ page }) => {
    await expect(page.locator('text=/info@almagrosanmiguel.com/i')).toBeVisible()
    await expect(page.locator('text=/Sevilla/i')).toBeVisible()
  })

  test('should have character counter for message', async ({ page }) => {
    const textarea = page.locator('textarea[name="message"]')
    await textarea.fill('Test message')
    
    // Look for character count display
    await expect(page.locator('text=/\/\s*2000/')).toBeVisible()
  })
})
