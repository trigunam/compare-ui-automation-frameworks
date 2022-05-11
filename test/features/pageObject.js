import fs from "fs";

export class PageObject {
  constructor(driver) {
    this.driver = driver;
  }

  async takeScreenshot(fileName) {
    // Returns base64 encoded string
    let encodedString = await this.driver.takeScreenshot();
    await fs.writeFileSync(
      `./screenshots/${fileName}.png`,
      encodedString,
      "base64"
    );
  }
}
