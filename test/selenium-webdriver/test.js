import { initializeDriver } from "./util/drivers.js";
import driversJson from "./config/drivers.json" assert { type: "json" };

import { Dashboard } from "./features/dashboard.js";

(async function testAPage() {
  /**
   * Initializes the drivers specified in config/drivers.json.
   */
  driversJson.forEach(({ webdriver, type }) => {
    initializeDriver(webdriver, type).then(async (driver) => {
      try {
        const dashboard = new Dashboard(driver);
        await dashboard.share();
        await dashboard.notify();
      } catch (error) {
        console.error(error);
      } finally {
        driver.quit();
      }
    });
  });
})();
