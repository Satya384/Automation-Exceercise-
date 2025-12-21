class AddToCart{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.allProducts = page.locator(".product-image-wrapper");
        this.addedToCartMsg=page.locator("p.text-center").first();
        this.viewCartInCart=page.locator("p.text-center").nth(1);
        this.addedProductName=page.locator("a[href*='product_details']");
    }

    async addProductToCart(productName){
        let b = false;
        const c= await this.allProducts.count();
        for(let i=0; i<c; ++i){
            const currentItem = await this.allProducts.nth(i).locator("p").first().textContent();
            
            if(currentItem===productName){
                await this.allProducts.nth(i).locator("a").first().click();
                b = true;
                break;
            }
        }
        if(b===false){
            console.log("No items found");
        }
        else{
            console.log("Item successfully added to cart");
        }
        await this.page.waitForLoadState('networkidle');
    }

    async verifyAddedToCartMsg(){
        await this.expect(this.addedToCartMsg).toContainText("Your product has been added to cart.");
    }

    async verifyProductDetailsInCart(productName){
        await this.viewCartInCart.click();
        this.expect(await this.page.locator("text=Shopping Cart").isVisible()).toBeTruthy();
        await this.addedProductName.waitFor();
        await this.expect(this.addedProductName).toContainText(productName);

    }
}module.exports={AddToCart};