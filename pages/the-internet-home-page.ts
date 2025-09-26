import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    textHeader: Locator
    allLinks: Locator

    constructor(page: Page) {
        this.textHeader = page.getByRole('heading', { name: 'Welcome to the-internet' })

        this.allLinks = page.locator('ul li a');
    }
    async validateHeader(): Promise<void> {
        await expect(this.textHeader).toBeVisible();
    }
    async clickLinkByName(name: string): Promise<void> {
        await this.allLinks.filter({ hasText: name }).first().click();
    }
} 