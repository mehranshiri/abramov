import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/overreacted/);
});

test('click to go to /7', async ({ page }) => {
  // In this end to end test, it is assumed that user clicks on the 7th post
  // and navigates to it's page

  await page.goto('/');
  await page.getByTestId('anchor-7').click();
  await expect(page.locator('h1')).toHaveText('magnam facilis autem');});