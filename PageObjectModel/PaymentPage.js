class PaymentPage{
    constructor(page, expect){
        this.page=page;
        this.expect=expect;
        this.cardNameField=page.locator("input[name='name_on_card']");
        this.cardNumberField=page.locator("input[name='card_number']");
        this.cvvField=page.locator("input[name='cvc']");
        this.monthField=page.locator("input[name='expiry_month']");
        this.yearField=page.locator("input[name='expiry_year']");
        this.payAndCofirmBtn=page.locator("#submit");   
        this.orderPlacedMsg=page.locator("h2 b");

    }

    async enterCardDetails(cardName,cardNumber,cvv,expireMonth,expireYear){
        await this.cardNameField.fill(cardName);
        await this.cardNumberField.fill(cardNumber);
        await this.cvvField.fill(cvv);
        await this.monthField.fill(expireMonth);
        await this.yearField.fill(expireYear);

    }

    async payAndConfirmOrder(){
        await this.payAndCofirmBtn.click();
        await this.expect(this.orderPlacedMsg).toContainText("Order Placed!");
    }
}
module.exports={PaymentPage};