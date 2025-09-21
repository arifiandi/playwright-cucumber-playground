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

    public async getSuccessMessage(): Promise<string> {
        await this.page.waitForSelector('#contact_reply h1', { timeout: 60000 });
        return await this.page.innerText('#contact_reply h1');

    }

    public async getErrorMessage(): Promise<string> {
        await this.page.waitForSelector('body');
        const bodyElement = await this.page.locator('body');
        const bodyText = await bodyElement.textContent();
        return bodyText ?? ''; // if the following constant is null, return an empty string
    }

    public async getHeaderText(message: string): Promise<string> {
        // wait for target element
        await this.page.waitForSelector('//h1 | //body', { state: 'visible' });

        // get all elements 
        const elements = await this.page.locator('//h1 | //body').elementHandles();
        let foundElement = '';

        // loop through elements and check if any of them contain the expected text
        for (const element of elements) {
            let text = await element.innerText();
            if (text.includes(message)) {
                foundElement = text;
                break; // exit loop if found
            }
        }
        return foundElement;
    }
}