import { BasePage } from "./base/base-page";

export class ContactUsPage extends BasePage {
    // specific method for the contact us page
    public async fillFirstName(firstName: string): Promise<void> {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    public async fillLastName(lastName: string): Promise<void> {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    public async fillEmail(email: string): Promise<void> {
        await this.page.getByPlaceholder('Email Address').fill(email);
    }

    public async fillComment(comment: string): Promise<void> {
        await this.page.getByPlaceholder('Comments').fill(comment);
    }

    public async submitForm(): Promise<void> {
        await this.page.waitForSelector('input[value="SUBMIT"]');
        await this.page.getByRole('button', { name: 'SUBMIT' }).click();
    }
}