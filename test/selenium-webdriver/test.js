const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const safari = require("selenium-webdriver/safari");

const urlToTest = "https://compare-ui-automation-frameworks.vercel.app";

(async function testAPage() {
  try {
    initializeChromeDriver().then((driver) => {
      driver.quit();
    });
    initializeSafariDriver().then((driver) => {
      driver.quit();
    });
  } catch (error) {
    console.log(error);
  }
})();

async function initializeChromeDriver() {
  let options = new chrome.Options();
  let driver = await new Builder()
    .setChromeOptions(options)
    .forBrowser("chrome")
    .build();
  await driver.get(urlToTest);
  return driver;
}

async function initializeSafariDriver() {
  let options = new safari.Options();
  let driver = await new Builder()
    .forBrowser("safari")
    .setSafariOptions(options)
    .build();

  await driver.get(urlToTest);
  return driver;
}
