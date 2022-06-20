 export default class Basepage{
    async open(url) {
        await browser.maximizeWindow()
        await browser.url(url)
    }
}
