const {test, expect} = require('@playwright/test');

test('home page',async({page}) =>{
    await page.goto('https://demoblaze.com/index.html');
     
    // const pageTitle = await page.title();
    // console.log(pageTitle);
    // await expect(pageTitle).toBe('STORE');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.click("#login2");
    await page.fill("#loginusername", 'jyothi2123');
    await page.fill("#loginpassword", 'test');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator("#logout2")).toBeVisible();
    await page.close();
})


// example program

const { test, expect } = require('@playwright/test');

test('Login to application', async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');

    await page.click('#loginBtn');

    await expect(page).toHaveURL(/dashboard/);
});