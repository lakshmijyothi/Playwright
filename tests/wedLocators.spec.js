const {test, expect} = require('@playwright/test');

test('home page',async({page}) =>{
    await page.goto('https://demoblaze.com/index.html');
     
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(pageTitle).toBe('STORE');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.waitForSelector(".card-title")
    
    const products = await page.$$(".card-title")

    for(const product of products){
         const prod = await product.textContent();
         console.log(prod)
    }

})