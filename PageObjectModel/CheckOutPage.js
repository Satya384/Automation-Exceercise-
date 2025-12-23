class CheckOutPage{
    constructor(page, expect){
        this.page= page;
        this.expect=expect;
        this.proceedToCheckOutBtn=page.locator("a.btn.btn-default.check_out");
        this.checkOutText=page.locator("text=Checkout");
        this.productNameFiled=page.locator("h4 a");
        this.actualMobileNum=page.locator("ul#address_delivery li.address_phone");
        this.placeorderBtn=page.locator("a[href*='payment']");
    }

    async verifyOrderDetailsInCheckOutPage(mobileNum, productName){
        await this.proceedToCheckOutBtn.click();
        this.expect(await this.checkOutText.isVisible()).toBeTruthy();
        await this.expect(await this.productNameFiled).toContainText(productName);
        await this.expect(await this.actualMobileNum).toContainText(mobileNum);
    }

    async placeOrderFunction(){
        await this.placeorderBtn.click();
    }

    
}
module.exports={CheckOutPage};