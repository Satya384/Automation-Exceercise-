const {LoginPage} = require('./LoginPage');
const {AddToCart} = require('./AddToCart');

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
}
module.exports={PoManager};