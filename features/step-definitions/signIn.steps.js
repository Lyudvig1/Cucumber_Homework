import { Given, Then, When } from "@wdio/cucumber-framework";
import AuthPage from "../pageobjects/auth.page";
import { faker } from "@faker-js/faker";
import Elemets from "../pageobjects/elements"

Then(/^Create a user with random data$/, async () => {
  const randomStr = Math.random().toString(36).substring(2, 5);
  const emailId = `asdfg${randomStr}@gmail.com`;

  const addressObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: "123123",
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(),
    city: faker.address.cityName(),
  };

  global.SharedVariable.email = emailId;
  global.SharedVariable.address = addressObj;
  await AuthPage.createAccount(emailId, addressObj);
  let namePage = await AuthPage.pageName;
  await namePage.waitForDisplayed();
  await expect(namePage).toHaveText("MY ACCOUNT");
  await browser.pause(5000);
});

Given(/^I am on the log in page$/, async () => {
  await AuthPage.logOut();
  let pageHeading = await Elemets.pageHeading;
  await expect(pageHeading).toBePresent();
});

When(/^I am login with newly created user's data$/, async () => {
  await AuthPage.logIn(
    global.SharedVariable.email,
    global.SharedVariable.address.password
  );
  let namePage = await AuthPage.pageName;
  await namePage.waitForDisplayed();
  await expect(namePage).toHaveText("MY ACCOUNT");
});
