import { BasePage } from "./base/base-page";
// import { pageFixture } from "../step-definitions/hooks/browserContextFixture";

export class loginPortalPage extends BasePage {
    // constructor(page: Page) {
    //     super(page);
    // }

    // Locators
    private readonly usernameInput = this.page.getByPlaceholder('Username');
    private readonly passwordInput = this.page.getByPlaceholder('Password');
    public readonly loginButton = this.page.getByRole('button', { name: 'Login' });

    public async goToLoginPortal(): Promise<void> {
        await this.navigate('http://webdriveruniversity.com/Login-Portal/index.html');
    }

    // public async clickOnLoginButton(): Promise<void> {
    //     await this.loginButton.click();
    // }

    public async enterCredentials(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }
}   


