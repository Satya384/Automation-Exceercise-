const {LoginPage} = require('./LoginPage');

class PoManager{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
    }

    getLoginPage(){
        const loginPage = new LoginPage(this.page, this.expect);
        return loginPage;
    }
}
module.exports={PoManager};