import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Pedro Almagro/i })).toBeVisible()
  })

  test('should have navigation menu', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Inicio/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Portafolio/i })).toBeVisible()
  })

  test('should navigate to portfolio section', async ({ page }) => {
    await page.click('a[href="#portfolio"]')
    await expect(page.locator('#portfolio')).toBeInViewport()
  })

  test('should display portfolio projects', async ({ page }) => {
    await expect(page.getByText(/El Último Adiós/i)).toBeVisible()
  })

  test('should filter portfolio by category', async ({ page }) => {
    await page.click('button:has-text("Cine")')
    await expect(page.getByText(/El Último Adiós/i)).toBeVisible()
  })

  test('should submit contact form', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="subject"]', 'Test Subject')
    await page.fill('textarea[name="message"]', 'Test message')
    
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Gracias')
      await dialog.accept()
    })
    
    await page.click('button[type="submit"]')
  })
})
