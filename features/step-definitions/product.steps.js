import Products from "../pageobjects/products.page";
import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^I add product to cart$/, async ()=>{
    await Products.addProduct(table);
})