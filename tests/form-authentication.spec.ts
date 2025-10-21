import { test } from '@playwright/test'
import { HomePage } from '../pages/the-internet-home-page'
import { formAuthenticationPage } from '../pages/form-authentication-page'
import { SecurePage } from '../pages/secure-page'

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    
});
test('Form Authentication link navigation', async ({ page }) => {
    let formAuthentication = new formAuthenticationPage(page);
    let homePage = new HomePage(page);
    let securePage = new SecurePage(page);

    await homePage.clickLinkByName('Form Authentication');
    await formAuthentication.validateHeader('Login Page');
    await formAuthentication.login('tomsmith', 'SuperSecretPassword!');
});
