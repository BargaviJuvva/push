import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^the url$/, function () {
    browser.url("https://www.amazon.com/")
});

When(/^i click the amazon.in logo$/, async function () {
    const elementRef = await browser.findElement('xpath',"//a[@id='nav-logo-sprites']")
    const element = await $(elementRef)
    await element.click()

});

Then(/^i click on all$/, async function () {
    const elementRef1 = await browser.findElement('xpath',"//select[@id='searchDropdownBox']")
    const element1 = await $(elementRef1)
    await element1.selectByIndex(5)
    const elementRef2 = await browser.findElement('xpath',"//input[@id='nav-search-submit-button']")
    const element2 = await $(elementRef2)
    element2.click()
    
});

