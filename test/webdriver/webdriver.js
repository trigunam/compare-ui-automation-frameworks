export class WebDriver {
  constructor() {
    this.urlToTest = "https://compare-ui-automation-frameworks.vercel.app";
  }

  async initializeDriver(webDriver, type) {
    console.log("Initializing driver with " + webDriver + " " + type);
  }

  async addCapabilities() {
    console.log("Adding capabilities...");
  }

  async chooseDriver(webDriver, type) {
    console.log("Choose driver for " + webDriver + " " + type);
  }

  async chooseOptions(webDriver, type) {
    console.log("Choose options for " + webDriver + " " + type);
  }
}
