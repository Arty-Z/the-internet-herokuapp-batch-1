import { expect, Locator, Page } from '@playwright/test'

export class InternalServerErrorPage {
    errorMessage: Locator

    constructor(page: Page) {
        this.errorMessage = page.getByRole('heading', { name: 'Internal Server Error' })
    }
    async validateErrorMessage(): Promise<void> {
        await expect(this.errorMessage).toHaveText('Internal Server Error')
    }
}