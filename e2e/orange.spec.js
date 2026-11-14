const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('OrangeHRM Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLoginButton();
});