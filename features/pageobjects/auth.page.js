class AuthPage {
  get emailInputField() {
    return $("#email_create");
  }

  get submitBtn() {
    return $("#SubmitCreate");
  }

  async genderIndex(index) {
    return $(`#id_gender${index}`);
  }

  async selectGender() {
    let index = Math.round(Math.random() + 1);
    let gender = await this.genderIndex(index);
    await gender.click();
    await expect(gender).toBeSelected();
  }

  get firstNameInput() {
    return $("#customer_firstname");
  }

  get lastNameInput() {
    return $("#customer_lastname");
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#passwd");
  }

  get daysDropdown() {
    return $("#days");
  }

  get monthsDropdown() {
    return $("#months");
  }

  get yearsDropdown() {
    return $("#years");
  }

  get newsCheckbox() {
    return $("#newsletter");
  }

  get confirmFirstName() {
    return $(".form-control#firstname");
  }

  get confirmLastName() {
    return $(".form-control#lastname");
  }

  get companyInput() {
    return $("#company");
  }

  get formAddress1() {
    return $("#address1");
  }

  get formAddress2() {
    return $("#address2");
  }

  get cityInput() {
    return $("#city");
  }

  get stateDropdown() {
    return $("#id_state");
  }

  get postcodeInput() {
    return $("#postcode");
  }

  get countryDropdown() {
    return $("#id_country");
  }

  get infoTextField() {
    return $("#other");
  }

  get homePhoneInput() {
    return $("#phone");
  }

  get mobilePhoneInput() {
    return $("#phone_mobile");
  }

  get myAddress() {
    return $("#alias");
  }

  get submitAccountBtn() {
    return $("#submitAccount");
  }

  get pageName() {
    return $("#center_column > h1");
  }

  createAccount = async (emailId, address) => {
    let email = await this.emailInputField;
    await email.waitForDisplayed();
    email.setValue(emailId);
    let clickOnSubmitBtn = await this.submitBtn;
    await clickOnSubmitBtn.waitForClickable({ timeout: 3000 });
    await clickOnSubmitBtn.click();
    await this.selectGender();
    await (await this.firstNameInput).setValue(address.firstName);
    await (await this.lastNameInput).setValue(address.lastName);
    await (await this.emailInput).setValue(emailId);
    await (await this.passwordInput).setValue(address.password);
    await (await this.daysDropdown).selectByIndex(5);
    await (await this.monthsDropdown).selectByIndex(4);
    await (await this.yearsDropdown).selectByIndex(5);
    await (await this.newsCheckbox).click();
    await (await this.confirmFirstName).setValue(address.firstName);
    await (await this.confirmLastName).setValue(address.lastName);
    await (await this.companyInput).setValue(address.company);
    await (await this.formAddress1).setValue(address.address1);
    await (await this.formAddress2).setValue(address.address2);
    await (await this.cityInput).setValue(address.city);
    await (await this.stateDropdown).selectByIndex(3);
    await (await this.postcodeInput).setValue("11223");
    await (await this.countryDropdown).selectByIndex(1);
    await (await this.infoTextField).setValue("this is my info");
    await (await this.homePhoneInput).setValue("+11 111111");
    await (await this.mobilePhoneInput).setValue("+22 222222");
    await (await this.myAddress).setValue("New address");
    await (await this.submitAccountBtn).click();
  };

  // Log in with newly created uesr's data
  get signOutBtn() {
    return $(".logout");
  }

  async logOut() {
    let signOutButton = await this.signOutBtn;
    if (signOutButton.isExisting()) {
      signOutButton.click();
    }
  }

  get logInEmail() {
    return $("#email");
  }

  get logInPassword() {
    return $("#passwd");
  }

  get loginSubmit() {
    return $("#SubmitLogin");
  }

  logIn = async (userName, password) => {
    await (await this.logInEmail).setValue(userName);
    await (await this.logInPassword).setValue(password);
    await (await this.loginSubmit).click();
  };
}
export default new AuthPage();
