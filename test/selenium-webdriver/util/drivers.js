const { Builder } = require("selenium-webdriver");

const urlToTest = "https://compare-ui-automation-frameworks.vercel.app";

/**
 *
 * @param {String} driver from the drivers.json, of the format: selenium-webdriver/chrome | selenium-webdriver/safari
 * @param {String} type from the drivers.json, of the format: chrome | safari
 * @returns Initialized driver instance.
 */
async function initializeDriver(driver, type) {
  /**
   * Does the following
   *
   * const chrome = require("selenium-webdriver/chrome");
   * const safari = require("selenium-webdriver/safari");
   */
  const browser = require(driver);

  /**
   * Does the following
   *
   * new chrome.Options();
   * new safari.Options();
   */
  const options = new browser.Options();

  let initializedDriver = new Builder();

  switch (type) {
    case "chrome":
      initializedDriver = initializedDriver.setChromeOptions(options);
      break;
    case "safari":
      initializedDriver = initializedDriver.setSafariOptions(options);
      break;
  }

  // .forBrowser("chrome")
  // .forBrowser("safari")
  initializedDriver = initializedDriver.forBrowser(type).build();

  await initializedDriver.get(urlToTest);
  return initializedDriver;
}

module.exports = { initializeDriver };
