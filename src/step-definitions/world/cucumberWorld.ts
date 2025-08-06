import { World, setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { pageManager } from '../../page-objects/base/page-manager';
import { BasePage } from '../../page-objects/base/basePage';

export class CucumberWorld extends World {
    public pageManager: pageManager; // Instance of pageManager to access page and basePage
    public basePage: BasePage; // Instance of BasePage for common page actions

    //base url
    private url?: string;

    //person
    private firstName?: string;
    private lastName?: string;
    private emailAddress?: string;

    constructor({ attach, log, parameters }: IWorldOptions) {
        super({ attach, log, parameters });
        this.pageManager = new pageManager(); // Initialize page manager for accessing page and basePage
        this.basePage = this.pageManager.createBasePage(); // Access basePage from pageManager
    }

    //setter methods for first name etc:
    setUrl(url: string) {
        this.url = url;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setEmailAddress(emailAddress: string) {
        this.emailAddress = emailAddress;
    }

    // getter methods for first name etc:
    getUrl(): string | undefined {
        return this.url;
    }
    getFirstName(): string | undefined {
        return this.firstName;
    }
    getLastName(): string | undefined {
        return this.lastName;
    }
    getEmailAddress(): string | undefined {
        return this.emailAddress;
    }
}

// Set the custom world constructor for Cucumber
setWorldConstructor(CucumberWorld);