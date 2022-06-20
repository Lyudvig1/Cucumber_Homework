import { Given, When, Then } from "@wdio/cucumber-framework";
import Address from "../pageobjects/address.page";

Then(/^I shall verify the address info in my address$/, async () => {
  await Address.openMyAddress();
});
