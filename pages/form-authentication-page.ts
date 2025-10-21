import { expect, Locator, Page } from '@playwright/test'


export class formAuthenticationPage {
    textHeader: Locator
    usernameInput: Locator
    passwordInput: Locator
    loginButton: Locator
    logedInMessage: Locator
    logedOutButton: Locator
    


    constructor(page: Page) {
        this.textHeader = page.getByRole('heading', { name: 'Login Page' })
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('textbox', { name: 'Password' })
        this.logedInMessage = page.getByText('You logged into a secure area')
        this.logedOutButton = page.getByText('You logged out of the secure')
       
    }
    async validateHeader(header: string): Promise<void> {
        await expect(this.textHeader).toBeVisible();
        await expect(this.textHeader).toHaveText(header);

    }
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async isLogedIn(): Promise<void> {
        await expect(this.logedInMessage).toBeVisible();
        await expect(this.logedInMessage).toHaveText('You logged into a secure area!');
    }
    async logOutClick(): Promise<void> {
        await this.loginButton.click();
    }
    async isLogedOut(): Promise<void> {
        await expect(this.logedOutButton).toBeVisible();
        await expect(this.logedOutButton).toHaveText('You logged out of the secure area!');
    }
    
} 