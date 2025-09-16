import { BasePage } from "./base/base-page";

export class loginPortalPage extends BasePage {

    // private readonly usernameInput = this.page.getByPlaceholder('Username');
    // private readonly passwordInput = this.page.getByPlaceholder('Password');
    // public readonly loginButton = this.page.getByRole('button', { name: 'Login' });

    // Use getter methods instead of properties to ensure 'this.page' is accessible
    public get usernameInput() {
        return this.page.getByPlaceholder('Username');
    }

    public get passwordInput() {
        return this.page.getByPlaceholder('Password');
    }

    public get loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    }

    public async goToLoginPortal(): Promise<void> {
        await this.navigate('http://webdriveruniversity.com/Login-Portal/index.html');
    }

    public async enterCredentials(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }
}   


