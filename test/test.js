import { SeleniumWebDriver } from "./selenium-webdriver/drivers.js";
import { CypressWebDriver } from "./cypress/drivers.js";
import driversJson from "./config/drivers.json" assert { type: "json" };

import { Dashboard } from "./features/dashboard.js";

(async function testAPage() {
  /**
   * Initializes the drivers specified in config/drivers.json.
   */
  driversJson.forEach(({ selenium, type }) => {
    new SeleniumWebDriver()
      .initializeDriver(selenium, type)
      .then(testDashboard);
    new CypressWebDriver().initializeDriver(selenium, type).then(testDashboard);
  });
})();

async function testDashboard(webDriver) {
  try {
    const dashboard = new Dashboard(webDriver);
    await dashboard.share();
    await dashboard.notify();
  } catch (error) {
    console.error(error);
  } finally {
    webDriver.driver.quit();
  }
}
