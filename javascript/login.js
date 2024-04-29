const { Builder, By, Key, until } = require('selenium-webdriver');

async function validatePassword() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('file:///C:/Users/Lenovo/OneDrive/Desktop/WIZBIZ/login.html');
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
        const password = generateRandomString(5,15); 
        await passwordInput.sendKeys(password);
        console.log("password is:"+password);

        function generateRandomString(minLength, maxLength) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; 
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }


        const submitButton = await driver.findElement(By.id('register'));
        await submitButton.click();

        const errorMessageElement = await driver.wait(until.elementLocated(By.id('error-message')), 10000);

        const errorMessage = await errorMessageElement.getText();

        console.log('Error message:', errorMessage);

      

    } catch (error) {
        console.error('An error occurred:', error);
    } 
}


validatePassword();


