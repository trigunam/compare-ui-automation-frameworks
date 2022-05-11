# Comparing UI Automation Frameworks

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Build Status](https://github.com/trigunam/compare-ui-automation-frameworks/blob/main/.github/workflows/eslint.yml/badge.svg)](https://github.com/trigunam/compare-ui-automation-frameworks/actions/) [![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](CONTRIBUTING.md)

User Interface Automation Frameworks undergo a lot of changes due to upgrades possible from Node, JavaScript (via ECMA) and other dependent packages. This brings in a big question to the automation framework on what tool can be used to make sure all the upgrades happening around the JavaScript world work smoothly.

Some of the famous or well-known tools for UI Automation Framework are used here to test a sample angular products page. Recently there are tons of tools available however only a few are really useful when we compare them against certain criteria.

For this project, the following criteria hold good.

* Ability to reuse existing scripts written in Protractor.
* Ability to support configuration via vault so that sensitive information is externalized.
* Ability to test multiple browsers using the same script (Chrome, Firefox, Safari, Edge)
* Ability to generate a report in JSON format to later integrate it with Microsoft Test Manager or Azure Dev Ops Tests.
* Ability to adapt to future upgrades if any for dependent packages to avoid any security vulnerabilities.
* Easy to read and adopt by developers. Less learning curve.
* Low or No cost

For all the frameworks, if at least 4/6 matches, it can be consider for evaluation.

This project has code for:

* [Selenium-Webdriver](https://www.selenium.dev/documentation/overview/)
* [Cypress](https://www.cypress.io/features/)
* [Plywright](https://playwright.dev/docs/intro)
* [Puppeteer](https://pptr.dev/)
* [Test Café](https://testcafe.io/documentation/402635/getting-started)
* [WebdriverIO](https://webdriver.io/docs/what-is-webdriverio)
* [Protractor deprecated](https://github.com/angular/protractor/issues/5502).
