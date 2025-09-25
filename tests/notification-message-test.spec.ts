import { test } from '@playwright/test'
import { HomePage } from '../pages/the-internet-home-page'
import { NotificationMessagePage } from '../pages/notification-message-page'



test.beforeEach(async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
});

test('Notification Message link navigation', async ({ page }) => {
    let notificationMessagePage = new NotificationMessagePage(page);
    let homePage = new HomePage(page);

    let  possibleMessages : string[] = [
    'Action successful',
    'Action unsuccesful, please try again'
  ];
    
    await homePage.clickLinkByName('Notification Messages');
    await notificationMessagePage.validateMainHeader('Notification Message');
    await notificationMessagePage.validateMainHeader('Action unsuccesful, please try again'); 
    await notificationMessagePage.clickOnLink();
    await notificationMessagePage.validateErrorMessage(possibleMessages);
});

