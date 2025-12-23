class LoginPage{
    constructor(page, expect){
        this.page=page;
        this.expect=expect;
        this.gotoLoginBtn=page.locator(".fa.fa-lock");
        this.emailTxtBox=page.locator("[data-qa='login-email']");
        this.pswdTxtBox=page.locator("[data-qa='login-password']");
        this.loginBtn=page.locator("[data-qa='login-button']");
        this.logoutBtn=page.locator("text= Logout");
    }

    async gotoUrl(url){
        await this.page.goto(url);
        // await this.page.waitForLoadState('networkidle');
    }

    async login(email,password){
        await this.gotoLoginBtn.click()
        await this.emailTxtBox.fill(email);
        await this.pswdTxtBox.fill(password);
        await this.loginBtn.click();
        // await this.page.waitForLoadState('networkidle');
    }

    async validateSuccessfulLogin(){
        await this.expect(this.page).toHaveTitle("Automation Exercise");
        this.expect(await this.logoutBtn.isVisible()).toBeTruthy();
    }
}
module.exports={LoginPage};