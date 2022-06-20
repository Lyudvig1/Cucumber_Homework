import { Given, Then, And } from "@wdio/cucumber-framework";
import Page from "../pageobjects/open.page";
import Elemets from "../pageobjects/elements";


Given(/^I am on the home page$/, async () => {
  await Page.open(env.BASE_URL);
  await browser.getTitle();
  await expect(browser).toHaveTitleContaining("My Store");
  let logo = await Elemets.mainLogo;
  await expect(logo).toBePresent();
  let signInBtn = await Elemets.signUpBtn;
  await expect(signInBtn).toBePresent();
});

Then(/^Navigate to the SignUp section$/, async () => {
  await Elemets.navigateToLoginPage();
  await browser.getUrl();
  await expect(browser).toHaveUrlContaining("my-account");
  let authHead = await Elemets.pageHeading;
  await expect(authHead).toBePresent();
});

