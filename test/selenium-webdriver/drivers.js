import { Builder, Capabilities } from "selenium-webdriver";
import {
  PageLoadStrategy,
  UserPromptHandler,
} from "selenium-webdriver/lib/capabilities.js";
import { WebDriver } from "../webdriver/webDriver.js";

export class SeleniumWebDriver extends WebDriver {
  constructor() {
    super();
  }

  /**
   * Initialize drivers based on [config/drivers.json](./config/drivers.json).
   *
   * Maximizes the window size of the browser.
   * Uses the urlToTest. Configure this in [util/drivers.js](./util/drivers.js)
   *
   * @param {String} webDriver from the drivers.json, of the format: selenium-webdriver/chrome | selenium-webdriver/safari
   * @param {String} type from the drivers.json, of the format: chrome | safari
   * @returns Initialized driver instance.
   */
  async initializeDriver(webDriver, type) {
    super.initializeDriver(webDriver, type);

    // .forBrowser("chrome")
    // .forBrowser("safari")
    this.driver = (await this.chooseDriver(webDriver, type))
      .withCapabilities(this.addCapabilities())
      .forBrowser(type)
      .build();

    await this.driver.manage().window().maximize();
    await this.driver.get(this.appConfig.baseUrl);

    return this;
  }

  /**
   * Choose a driver based on [config/drivers.json](../config/drivers.json).
   *
   * and then setChromeOptions or setSafariOptions or setFirefoxOptions.
   *
   * @param {String} webDriver One of "selenium-webdriver/chrome", "selenium-webdriver/safari", "selenium-webdriver/firefox
   * @param {String} type One of "chrome", "safari", "firefox
   * @returns Instance of a web driver.
   */
  async chooseDriver(webDriver, type) {
    super.chooseDriver(webDriver, type);

    const options = await this.chooseOptions(webDriver, type);

    let driver = new Builder();

    switch (type) {
      case "chrome":
        driver = driver.setChromeOptions(options);
        break;
      case "safari":
        driver = driver.setSafariOptions(options);
        break;
      case "firefox":
        driver = driver.setFirefoxOptions(options);
        break;
    }

    return driver;
  }

  addCapabilities() {
    super.addCapabilities();

    const caps = new Capabilities();
    caps.setPageLoadStrategy(PageLoadStrategy.EAGER);
    caps.setAlertBehavior(UserPromptHandler.ACCEPT_AND_NOTIFY);
    return caps;
  }

  /**
   * Choose an option based on [config/drivers.json](../config/drivers.json).
   *
   * const chrome = require("selenium-webdriver/chrome");
   * const safari = require("selenium-webdriver/safari");
   * const firefox = require("selenium-webdriver/firefox");
   *
   * and then new chrome.Options().headless() or new safari.Options()
   *
   * @param {String} webDriver One of "selenium-webdriver/chrome", "selenium-webdriver/safari", "selenium-webdriver/firefox
   * @param {String} type One of "chrome", "safari", "firefox
   * @returns
   */
  async chooseOptions(webDriver, type) {
    super.chooseOptions(webDriver, type);

    // Safari does not support headless mode:
    // https://github.com/SeleniumHQ/selenium/issues/5985#issuecomment-400027169

    return import(`${webDriver}.js`).then((browser) =>
      type === "safari"
        ? new browser.Options()
        : new browser.Options().headless()
    );
  }
}
