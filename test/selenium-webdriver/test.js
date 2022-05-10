const { initializeDriver } = require("./util/drivers");
const driversJson = require("./config/drivers.json");

(async function testAPage() {
  try {
    /**
     * Initializes the drivers specified in config/drivers.json.
     */
    driversJson.forEach(({ driver, type }) => {
      initializeDriver(driver, type).then((initializedDriver) => {
        initializedDriver.quit();
      });
    });
  } catch (error) {
    console.log(error);
  }
})();
