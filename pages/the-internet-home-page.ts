import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    textHeader: Locator

constructor(page:Page){
    this.textHeader = page.getByRole('heading', { name: 'Welcome to the-internet' })
    }
    async validateHeader(): Promise<void> {
        await expect(this.textHeader).toBeVisible();
    }
}
