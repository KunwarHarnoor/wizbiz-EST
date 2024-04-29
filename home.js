import { Builder, By, Key, until } from "selenium-webdriver";

async function automateDropdownsAndScroll() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("file:///C:/Users/Lenovo/OneDrive/Desktop/WIZBIZ/home.html");

    const dropdownCategories = await driver.findElements(
      By.className("menu-category")
    );

    for (let category of dropdownCategories) {
      await category.click();
      await driver.sleep(1000);

      const dropdownItems = await category.findElements(
        By.className("panel-list-item")
      );

      for (let item of dropdownItems) {
        console.log(await item.getText());
      }

      await category.click();
      await driver.sleep(1000);
    }

    await driver.executeScript(
      "window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })"
    );
    await driver.sleep(2000);

    // Find and click on a link
    const link = await driver.findElement(By.id("loginclick")); 
    await link.click();
    await driver.sleep(2000);

    try {
      await driver.get("file:///C:/Users/Lenovo/OneDrive/Desktop/WIZBIZ/login.html");
      const passwordInput = await driver.wait(
        until.elementLocated(By.id("password")),
        10000
      );
      const password = generateRandomString(5, 15);
      await passwordInput.sendKeys(password);
      console.log("password is:" + password);

      function generateRandomString(minLength, maxLength) {
        const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        const length =
          Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; 
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }

      const submitButton = await driver.findElement(By.id("register"));
      await submitButton.click();

      const errorMessageElement = await driver.wait(
        until.elementLocated(By.id("error-message")),
        10000
      );

      const errorMessage = await errorMessageElement.getText();
      console.log("Error message:", errorMessage);
      await driver.sleep(4000);
      const backtohome=await driver.findElement(By.id("home1"));
      await backtohome.click();
      console.log("Clicked on back to home successfully.");
    } catch (error) {
      console.error("An error occurred login:", error);
    }
    await driver.sleep(2000);
    var targetDiv = await driver.findElement(By.id('newproducts'));
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'start' });", targetDiv);
    console.log("chal raha hai");
    await driver.sleep(2000);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

automateDropdownsAndScroll();
