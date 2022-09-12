---
title: How to automate Auth0 social login using node.JS and Nightwatch.JS
date: "2020-05-27T16:51:00.000Z"
category: "Mail7"
tags:
  - "Nightwatch.JS"
  - "Social Login Automation"
  - "Node.JS"
  - "Auth0"
description: "Auth0 is an adaptable, drop-in answer for add authentication  to your applications. Your group and association can maintain a strategic distance from the cost, time, and hazard that accompanies building your own solution for authenticate and authorize users. it provides the various social login to create your account on it."
author: "Kuldeep Chhipa"
---

## What is Auth0
**Auth0** is an adaptable, drop-in answer for add **authentication**  to your applications. Your group and association can maintain a strategic distance from the **cost, time**, and hazard that accompanies building your own solution for **authenticate** and **authorize** users. it provides the various social login to create your account on it.


Here, we go through the registration on **Auth0** via various social providers.


## Use Cases (E-to-E test cases)
 > **Auth0 social login**


 - Login with **Google**
 - Login with **Github**
 - Login with **LinkedIn**
 - Login with **Microsoft** Account


## Automate Auth0 social login using Nightwatch.js


> **Nightwatch.js** is an integrated, easy to use End-to-End testing solution for web applications and websites, written in Node.js. It uses the [W3C WebDriver API](https://www.w3.org/TR/webdriver/) to drive browsers to perform commands and assertions on DOM elements.


---
>**Element Selectors JSON**


```json
let elements = {
    auth0URL: "https://auth0.com/auth/login",
    afterLoginElement: "#search-wrapper",
    google: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(2)",
        emailLocator: "#identifierId",
        passwordLocator: "input[name='password']"
    },
    github: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(1)",
        emailLocator: "#login_field",
        passwordLocator: "#password"
    },
    linkedin: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(3)",
        emailLocator: "#username",
        passwordLocator: "#password"
    },
    microsoft: {
        loginButton: "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div.auth0-lock-widget-container > div > div > div.auth0-lock-content-wrapper > div:nth-child(2) > div > div > div > div > div > div > div > div > div.auth-lock-social-buttons-pane > div > button:nth-child(4)",
        emailLocator: "#i0116",
        passwordLocator: "#i0118",
        signInButton: "#idSIButton9"
    }
}
```
>**Credentials JSON**


```json
let credentials = {
    google: {
        email: "*********@****.*****",
        password: "***********"
    },
    github: {
        email: "*********@****.*****",
        password: "***********"
    },
    linkedin: {
         email: "*********@****.*****",
        password: "***********"
    },
    microsoft: {
        email: "*********@****.*****",
        password: "***********"
    },
}
```
>**Login with Google**


    module.exports = {
        '@tags': ['Auth0SocialLogin'],
    
        "Verify Login in Auth0 with Google": function (browser, done) {
            browser.url(elements.auth0URL);
            browser.waitForElementVisible(elements.google.loginButton, 20000, "Auth0 login page should visible.");
            browser.click(elements.google.loginButton);
            browser.setValue(elements.google.emailLocator, [credentials.google.email, browser.Keys.ENTER]);
            browser.waitForElementVisible(elements.google.passwordLocator, 20000, "Password field should Visible");
            browser.setValue(elements.google.passwordLocator, [credentials.google.password, browser.Keys.ENTER]);
            browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Google success");
            browser.end(done);
        },




>**Login with Github**


    module.exports = {
        '@tags': ['Auth0SocialLogin'],
    
       "Verify Login in Auth0 with Github": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.github.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.github.loginButton);
        browser.waitForElementVisible(elements.github.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.github.emailLocator, credentials.github.email);
        browser.setValue(elements.github.passwordLocator, [credentials.github.password, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Github success.");
        browser.end(done);
    },


>**Login with LinkedIn**


    module.exports = {
        '@tags': ['Auth0SocialLogin'],
    
         "Verify Login in Auth0 with Linkedin": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.linkedin.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.linkedin.loginButton);
        browser.waitForElementVisible(elements.linkedin.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.linkedin.emailLocator, credentials.linkedin.email);
        browser.setValue(elements.linkedin.passwordLocator, [credentials.linkedin.password, browser.Keys.ENTER]);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with LinkedIn success");
        browser.end(done);
    },


>**Login with Microsoft Account**


    module.exports = {
        '@tags': ['Auth0SocialLogin'],
    
         "Verify Login in Auth0 with Microsoft": function (browser, done) {
        browser.url(elements.auth0URL);
        browser.waitForElementVisible(elements.microsoft.loginButton, 20000, "Auth0 login page should visible.");
        browser.click(elements.microsoft.loginButton);
        browser.waitForElementVisible(elements.microsoft.emailLocator, 20000, "Email and Password field should Visible");
        browser.setValue(elements.microsoft.emailLocator, [credentials.microsoft.email, browser.Keys.ENTER]);
        browser.setValue(elements.microsoft.passwordLocator, [credentials.microsoft.password, browser.Keys.ENTER]);
        browser.click(elements.microsoft.signInButton);
        browser.waitForElementVisible(elements.afterLoginElement, 20000, "Auth0 login with Microsoft success");
        browser.end(done);
    }


>**Note:** Either you can manage or write the whole code in the single file or manage in a separate file for each as well.


## Conclusion
By using this article we can completely automate the **Auth0 social login** and also reuse the code in different manner as well. we manage the **Page Elements** and **Credentials** in different objects for code reusability and follow the standard framework.
