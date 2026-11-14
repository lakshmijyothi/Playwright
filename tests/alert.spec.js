const {test, expect} = require('@playwright/test');

test('alert',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept()
    })
    await page.click('#alertBtn');
   
    
});


