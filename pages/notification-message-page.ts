import { expect, Locator, Page } from '@playwright/test'


export class NotificationMessagePage {
    mainHeader: Locator
    clickHereLink: Locator
    errorMessage: Locator

    constructor(page: Page) {
        this.mainHeader = page.getByRole('heading', { name: 'Notification Message' })
        this.clickHereLink = page.getByRole('link', { name: 'Click here' })
        this.errorMessage = page.locator('div[id="flash"]')
    }

    async validateMainHeader(expectedMainHeader: string): Promise<void> {
        await expect(this.mainHeader).toBeVisible();
        
    }

    async clickOnLink(): Promise<void> {
        await this.clickHereLink.click();
    }
    async validateErrorMessage(expectedErrorMessage: string[]): Promise<void> {
       
    await expect(this.errorMessage).toBeVisible();

    const text = (await this.errorMessage.innerText()).trim();
    
    const normalized = text.replace('×', '').trim();
    }

}
