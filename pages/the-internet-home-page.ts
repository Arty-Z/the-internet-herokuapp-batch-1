import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    textHeader: Locator
    dropDownLink: Locator
    dropDown: Locator

    constructor(page: Page) {
        this.textHeader = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropDownLink = page.getByRole('link', { name: 'Dropdown' })
        this.dropDown = page.locator('#dropdown')
    }
    async validateHeader(): Promise<void> {
        await expect(this.textHeader).toBeVisible();
    }
    async clickDropDownLink(): Promise<void> {
        await this.dropDownLink.click();
    }
    async selectDropDownOption(option: string): Promise<void> {
        await this.dropDown.selectOption({ label: option });
    } 
}

