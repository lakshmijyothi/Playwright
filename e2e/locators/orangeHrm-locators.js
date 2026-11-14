const LoginLocators = {

    username: {
        name: "Username",
        css: "input[name='username']",
        xpath: "//input[@name='username']"
    },

    password: {
        name: "Password",
        css: "input[name='password']",
        xpath: "//input[@name='password']"
    },

    loginButton: {
        name: "Login Button",
        css: "button[type='submit']",
        xpath: "//button[@type='submit']"
    }

};

module.exports = LoginLocators;