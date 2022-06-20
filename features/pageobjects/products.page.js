class Products {
    get categoryWomen() {
      return $("#block_top_menu > ul > li:nth-child(${number}) > a");
    }

  get tops() {
    return $(
      "#subcategories > ul > li:nth-child(1) > h5 > a"
    );
  }

  async openProduct() {
    await (await this.categoryWomen).click();
    await (await this.tops).waitForDisplayed();
    await (await this.tops).click();
  }

  get productContainer() {
    return $('//*[@id="center_column"]/ul/li[2]/div');
  }

  get addToBtn() {
    return $('//*[@id="center_column"]/ul/li[2]/div/div[2]/div[2]/a[1]');
  }

  get productName() {
    return $('//*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a');
  }

  get addSuccesMessage() {
    return $(".layer_cart_product.col-xs-12.col-md-6 > h2");
  }

  get proceedBtn() {
    return $(".layer_cart_cart.col-xs-12.col-md-6 >.button-container > a");
  }

//   async addProduct(table) {
//     const tableRow = table.hashes();
//     for (const element of tableRow) {
//       const categoryBtn = $(
//         `//*[@id="block_top_menu"]/ul/li[1]/a[contains(text(), '${element.category}')]`
//       );
//       await (await categoryBtn).click();
//     }

//     await (await this.productContainer).moveTo();
//     await (await this.addToBtn).click();
//     await (await this.addSuccesMessage).waitForDisplayed();
//   }
}
export default new Products();
