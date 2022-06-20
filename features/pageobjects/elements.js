class Elemets{
get signUpBtn (){
    return $(".login")
}

get mainLogo(){
    return $("#header_logo");
}

async navigateToLoginPage(){
    let displayedBtn = await this.signUpBtn;
    await displayedBtn.waitForDisplayed();
    displayedBtn.click();
}

get pageHeading(){
    return $(".page-heading")
}

}
export default new Elemets();