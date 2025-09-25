import { expect, Locator, Page } from '@playwright/test'

export class ForgotPasswordPage {
    enterEmailField: Locator
    retrievePasswordButton: Locator
    errorMwessage: Locator


    constructor(page: Page) {
        this.enterEmailField = page.getByRole('textbox', { name: 'E-mail' })
        this.retrievePasswordButton = page.getByRole('button', { name: 'Retrieve password' })
        this.errorMwessage = page.locator('#content > div > h1')
    }
    async enterEmail(email: string): Promise<void> {
        await this.enterEmailField.fill(email);
    }
    async clickRetrievePassword(): Promise<void> {
        await this.retrievePasswordButton.click();
    }
    async clickRetrievePasswordButton(): Promise<void> {
        await this.retrievePasswordButton.click();
    }
}

