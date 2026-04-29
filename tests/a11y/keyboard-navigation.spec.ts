import { test, expect } from '@playwright/test'

test.describe('Keyboard Navigation', () => {
  test('should navigate through navbar with keyboard', async ({ page }) => {
    await page.goto('/')

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab')
    }

    const activeElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON']).toContain(activeElement)
  })

  test('should open and close mobile menu with keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await page.getByRole('button', { name: /menú|menu/i }).focus()
    await page.keyboard.press('Enter')

    const mobileMenu = page.getByRole('dialog', { name: /menú|menu/i })
    await expect(mobileMenu).toBeVisible()

    await page.keyboard.press('Escape')

    await expect(mobileMenu).not.toBeVisible()
  })

  test('should submit contact form with keyboard', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Mensaje enviado con éxito' }),
      })
    })

    await page.goto('/#contact')
    await page.waitForLoadState('networkidle')

    await page.locator('input[name="name"]').fill('Test User')
    await page.locator('input[name="email"]').fill('test@example.com')
    await page.locator('select[name="category"]').selectOption('Consulta General')
    await page.locator('textarea[name="message"]').fill('This is a test message')
    await page.locator('input[name="acceptPrivacy"]').check()

    await page.locator('button[type="submit"]').focus()
    await page.keyboard.press('Enter')

    await expect(page.getByText(/mensaje enviado/i)).toBeVisible()
  })

  test('milestones controls should be keyboard operable when present', async ({
    page,
  }) => {
    await page.goto('/#timeline')
    await page.waitForLoadState('networkidle')

    const timeline = page.locator('#timeline')
    await expect(timeline).toBeVisible()

    const firstButton = timeline.locator('button').first()
    if ((await firstButton.count()) === 0) {
      test.skip(true, 'Timeline section has no keyboard-operated buttons.')
    }

    await firstButton.focus()
    await page.keyboard.press('Enter')

    await expect(firstButton).toBeFocused()
  })

  test('should trap focus in modal when open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await page.getByRole('button', { name: /menú|menu/i }).click()

    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab')
    }

    const isInModal = await page.evaluate(() => {
      const activeEl = document.activeElement
      const modal = document.querySelector('[role="dialog"]')
      return Boolean(activeEl && modal?.contains(activeEl))
    })

    expect(isInModal).toBe(true)
  })
})
