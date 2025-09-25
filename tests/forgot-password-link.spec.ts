import { test } from '@playwright/test'
import { HomePage } from '../pages/the-internet-home-page'
import { ForgotPasswordPage } from '../pages/forgot-password-page'
import { InternalServerErrorPage } from '../pages/internal-server-error-page'

test.beforeEach(async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
});

test('Forgot Password link navigation', async ({ page }) => {
    let forgotPasswordPage = new ForgotPasswordPage(page);
    let homePage = new HomePage(page);
    let internalServerErrorPage = new InternalServerErrorPage(page);
    await homePage.clickLinkByName('Forgot Password');
    await forgotPasswordPage.enterEmail('arty123@gmail.com');
    await forgotPasswordPage.clickRetrievePasswordButton();
    await internalServerErrorPage.validateErrorMessage();

})