import { By, until } from "selenium-webdriver";
import { deepEqual, ok } from "assert";

import { PageObject } from "./pageObject.js";

export class Dashboard extends PageObject {
  constructor(driver) {
    super(driver);
    this.driver = driver;

    this._buttonShare = By.xpath(
      "/html/body/app-root/div/app-product-list/div[1]/button"
    );

    this._buttonNotify = By.xpath(
      "/html/body/app-root/div/app-product-list/div[1]/app-product-alerts/p/button"
    );
  }

  share() {
    return this.verifyAlert(
      this._buttonShare,
      "Angular Getting Started",
      "Share",
      "The product has been shared!"
    );
  }

  notify() {
    return this.verifyAlert(
      this._buttonNotify,
      "Angular Getting Started",
      "Notify",
      "You will be notified when the product goes on sale"
    );
  }

  async verifyAlert(elementToFind, pageTitle, buttonText, alertText) {
    deepEqual(await this.driver.getTitle(), pageTitle);
    this.takeScreenshot(buttonText);

    await this.driver.findElement(elementToFind).then(async (element) => {
      const elementText = await element.getText();
      ok(elementText.includes(buttonText));

      await element.click();

      // Wait for the alert to be displayed
      await this.driver.wait(until.alertIsPresent());

      // Store the alert in a variable
      let alert = await this.driver.switchTo().alert();

      //assert the alert text for equality
      deepEqual(await alert.getText(), alertText);

      //Press the OK button
      await alert.accept();
    });
    return this;
  }
}
