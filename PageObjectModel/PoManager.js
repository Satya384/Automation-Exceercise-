const {LoginPage} = require('./LoginPage');
const {AddToCart} = require('./AddToCart');
const {CheckOutPage} = require('./CheckOutPage');
const {PaymentPage} = require('./PaymentPage');


class PoManager{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
    }

    getLoginPage(){
        const loginPage = new LoginPage(this.page, this.expect);
        return loginPage;
    }

    getAddToCart(){
        const addToCart = new AddToCart(this.page,this.expect);
        return addToCart;
    }

    getCheckOutpage(){
        const checkOutPage = new CheckOutPage(this.page,this.expect);
        return checkOutPage;
    }

    getPaymentPage(){
        const paymentPage = new PaymentPage(this.page,this.expect);
        return paymentPage;
    }
}
module.exports={PoManager};