import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('jyothi21234');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();

  // dropdown
  await page.locator("#dropdown").selectOption({label : "uk"})

  // multiple selction dropdown
  await page.selectOption("#dropdown",['Red','blue','yellow'])
});