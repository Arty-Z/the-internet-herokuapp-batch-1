import { test } from '@playwright/test'
import { HomePage } from '../pages/the-internet-home-page'

test('DropDown verification', async ({ page }) => {

    let homePage = new HomePage(page);

    await page.goto('https://the-internet.herokuapp.com/');

    await homePage.clickDropDownLink();
    await homePage.selectDropDownOption("Option 1");
    await homePage.validateDropDownOptionSelected1("Option 1");


    await homePage.selectDropDownOption("Option 2");


    await homePage.validateDropDownOptionSelected2("Option 2");

})