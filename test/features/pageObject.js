import fs from "fs";

export class PageObject {
  constructor(webdriver) {
    this.webdriver = webdriver;
  }

  async takeScreenshot(fileName) {
    // Returns base64 encoded string
    let encodedString = await this.webdriver.driver.takeScreenshot();
    await fs.writeFileSync(
      `${this.webdriver.appConfig.screenshotsFolder}/${fileName}.png`,
      encodedString,
      "base64"
    );
  }
}
