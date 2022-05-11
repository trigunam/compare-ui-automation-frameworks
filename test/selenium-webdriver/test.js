// const { initializeDriver } = require("./util/drivers");
// const driversJson = require("./config/drivers.json");

// const { testDashboard } = require("./features/dashboard");

import { initializeDriver } from "./util/drivers.js";
import driversJson from "./config/drivers.json" assert { type: "json" };

(async function testAPage() {
  try {
    /**
     * Initializes the drivers specified in config/drivers.json.
     */
    driversJson.forEach(({ webdriver, type }) => {
      initializeDriver(webdriver, type).then((driver) => {
        // testDashboard(driver);
        driver.quit();
      });
    });
  } catch (error) {
    console.log(error);
  }
})();
