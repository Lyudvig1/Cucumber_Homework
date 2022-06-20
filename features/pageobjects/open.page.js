import BasePage from "./base.page";
class Page extends BasePage {

    open(url) {
        return super.open(url);
    }

    async checkTitle(){
        await browser.getTitle();
    }


}

export default new Page();
