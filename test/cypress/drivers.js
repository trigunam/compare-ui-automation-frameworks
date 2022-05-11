import { WebDriver } from "../webdriver/webDriver.js";
export class CypressWebDriver extends WebDriver {
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
  }
}
