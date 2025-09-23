import { test } from '@playwright/test'
import { HomePage } from '../pages/the-internet-home-page'

test('Header verification', async ({ page }) => {

    let homePage = new HomePage(page);

    await page.goto('https://the-internet.herokuapp.com/');

    await homePage.validateHeader(); 
})