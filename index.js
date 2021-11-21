class ActionHelper {

    static launchUrl(url){
        browser.url(url);
    }

    static click(locator) {
        $(locator).click();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }

}

module.exports = ActionHelper;
