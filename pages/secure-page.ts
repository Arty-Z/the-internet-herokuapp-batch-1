import { expect, Locator, Page } from '@playwright/test'

export class SecurePage {

logoutButton: Locator


constructor(page: Page) {
 this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }   
    async clickLogoutButton(): Promise<void> {
     await this.logoutButton.click();
    }
}