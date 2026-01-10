import { test, expect } from '@playwright/test'

test.describe('Keyboard Navigation', () => {
  test('should navigate through navbar with keyboard', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Tab through navbar items
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab')
    }

    // Check if we're on a navigation element
    const activeElement = await page.evaluate(
      () => document.activeElement?.getAttribute('href')
    )
    expect(activeElement).toBeTruthy()
  })

  test('should open and close mobile menu with keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000')

    // Tab to hamburger button
    await page.keyboard.press('Tab')

    // Press Enter to open menu
    await page.keyboard.press('Enter')

    // Menu should be visible
    const mobileMenu = page.locator('[role="dialog"], .mobile-menu').first()
    await expect(mobileMenu).toBeVisible()

    // Press Escape to close
    await page.keyboard.press('Escape')

    // Menu should be hidden
    await expect(mobileMenu).not.toBeVisible()
  })

  test('should submit contact form with keyboard', async ({ page }) => {
    await page.goto('http://localhost:3000#contact')
    await page.waitForLoadState('networkidle')

    // Tab to first input
    const nameInput = page.locator('input[name="name"]')
    await nameInput.focus()
    await nameInput.fill('Test User')

    // Tab to email
    await page.keyboard.press('Tab')
    await page.keyboard.type('test@example.com')

    // Tab to message
    await page.keyboard.press('Tab')
    await page.keyboard.type('This is a test message')

    // Tab to submit button and press Enter
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    // Should show success/error message (form is functional)
    // Wait a bit for submission
    await page.waitForTimeout(2000)
  })

  test('FAQ accordion should be keyboard operable', async ({ page }) => {
    await page.goto('http://localhost:3000#faq')
    await page.waitForLoadState('networkidle')

    // Find first FAQ button
    const faqButton = page.locator('button').filter({ hasText: /¿|\?/ }).first()
    await faqButton.focus()

    // Press Enter to expand
    await page.keyboard.press('Enter')

    // Check if content is visible
    const isExpanded = await faqButton.getAttribute('aria-expanded')
    expect(isExpanded).toBe('true')
  })

  test('should trap focus in modal when open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000')

    // Open mobile menu
    const menuButton = page.locator('button[aria-label*="menu"]').first()
    await menuButton.click()

    // Tab through modal - focus should stay within
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab')
    }

    // Active element should still be within the modal
    const isInModal = await page.evaluate(() => {
      const activeEl = document.activeElement
      const modal = document.querySelector('[role="dialog"]')
      return modal?.contains(activeEl as Node)
    })

    expect(isInModal).toBe(true)
  })
})
