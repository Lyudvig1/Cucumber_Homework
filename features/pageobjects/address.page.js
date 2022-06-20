class Address {
  get myAddress() {
    return $(
      "#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a"
    );
  }

  get fNamelName() {
    return $(".addresses > div > div > ul > li:nth-child(2)");
  }

  get getAddressCompany() {
    return $(".address_company");
  }

  get address1() {
    return $(".address_address1");
  }

  async openMyAddress() {
    let address = await this.myAddress;
    await address.waitForDisplayed();
    await address.click();

    //address validation
    let name = await (await this.fNamelName).getText();
    let company = await (await this.getAddressCompany).getText();
    let address1 = await (await this.address1).getText();

    await expect(name).toBe(
      global.SharedVariable.address.firstName +
        " " +
        global.SharedVariable.address.lastName
    );

    await expect(company).toBe(global.SharedVariable.address.company);
    await expect(address1).toBe(global.SharedVariable.address.address1);
  }
}
export default new Address();
