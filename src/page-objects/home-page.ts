import { BasePage } from "./base/base-page";

export class HomePage extends BasePage {
    // specific method for the homepage
  public async clickOnContactUsBtn(): Promise<void> {
    await this.waitAndClickByRole("link", "Contact Us Form");
  }

  public async clickOnLoginPortalBtn(): Promise<void> {
    await this.waitAndClickByRole("link", "Login Portal");
  }
}