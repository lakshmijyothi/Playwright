const LoginLocators = require('../locators/LoginLocators');
const { expect } = require('@playwright/test');


class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async enterUsername(username) {
        await this.page.locator(LoginLocators.username.css).fill(username);
    }

    async enterPassword(password) {
        await this.page.locator(LoginLocators.password.css).fill(password);
    }

    async clickLoginButton() {
        await this.page.expect(LoginLocators.loginButton.css).toBeVisible;
        await this.page.locator(LoginLocators.loginButton.css).click();
    }
}

module.exports = LoginPage;