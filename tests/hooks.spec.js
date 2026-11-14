const {test, expect} = require('@playwright/test');
let page;

test.beforeEach('home page',async({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');
    await page.locator("#login").click();

});

test.afterEach(async()=>{
    await page.locator("#logout").click();
})

//screenshot

await page.screenshot({path:'tests/screenshots' + Date.now() + 'Fullpage.png',fullpage:true})