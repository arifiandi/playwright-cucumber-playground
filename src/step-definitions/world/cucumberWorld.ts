import { World, setWorldConstructor } from '@cucumber/cucumber';

export class CucumberWorld extends World {
    //base url
    private url?: string;

    //person
    private firstName?: string;
    private lastName?: string;
    private emailAddress?: string;

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