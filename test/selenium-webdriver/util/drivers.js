import { Builder, Capabilities } from "selenium-webdriver";

const urlToTest = "https://compare-ui-automation-frameworks.vercel.app";

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
export async function initializeDriver(webDriver, type) {
  // .forBrowser("chrome")
  // .forBrowser("safari")
  const driver = chooseDriver(webDriver, type)
    .withCapabilities(addCapabilities())
    .forBrowser(type)
    .build();

  await driver.manage().window().maximize();
  await driver.get(urlToTest);

  return driver;
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
function chooseDriver(webDriver, type) {
  const options = chooseOptions(webDriver, type);

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

function addCapabilities() {
  return new Capabilities();
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
function chooseOptions(webDriver, type) {
  // Safari does not support headless mode:
  // https://github.com/SeleniumHQ/selenium/issues/5985#issuecomment-400027169

  return import(`${webDriver}.js`).then((browser) =>
    type === "safari" ? new browser.Options() : new browser.Options().headless()
  );
}
