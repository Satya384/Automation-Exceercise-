const {test, expect} = require('@playwright/test');
const {PoManager} = require('../PageObjectModel/PoManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')));

test("Test Case to Place an Order", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new PoManager(page,expect);
    await poManager.getLoginPage().gotoUrl(data.url);
    await poManager.getLoginPage().login(data.email, data.password);
    await poManager.getLoginPage().validateSuccessfulLogin();
    await poManager.getAddToCart().addProductToCart(data.productName);
    await poManager.getAddToCart().verifyAddedToCartMsg();
    await poManager.getAddToCart().verifyProductDetailsInCart(data.productName);
});