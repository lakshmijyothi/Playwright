const {test, expect} = require('@playwright/test');

test('builtIn locators',async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.waitForAltText("company-branding")
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name : 'Login' }).click();
})
