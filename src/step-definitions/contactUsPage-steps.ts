import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CucumberWorld } from './world/cucumberWorld';
import logger from '../logger/logger';


When('I type a first name', async function (this: CucumberWorld) {
    // await page.pause();
    logger.info(`Base URL stored in Cucumber World: ${this.getUrl()}`);
    await this.contactUsPage.fillFirstName('Joe');
});

When('I type a last name', async function (this: CucumberWorld) {
    await this.contactUsPage.fillLastName('Bloggs');
});

When('I enter an email address', async function (this: CucumberWorld) {
    await this.contactUsPage.fillEmail('joebloggs@gmail.com');
});

When('I type a comment', async function (this: CucumberWorld) {
    await this.contactUsPage.fillComment('This is a test comment.');
});

When('I click on the submit button', async function (this: CucumberWorld) {
    await this.contactUsPage.submitForm();
});

Then('I should be presented with a successful contact us submission message', async function (this: CucumberWorld) {
    const successMessage = await this.contactUsPage.getSuccessMessage();
    logger.info(`Success message: ${successMessage}`);
    expect(successMessage).toBe('Thank You for your Message!');
});

Then('I should be presented with an unsuccessful contact us submission message', async function (this: CucumberWorld) {
    const errorMessage = await this.contactUsPage.getErrorMessage();
    logger.info(`Error message: ${errorMessage}`);
    await expect(errorMessage).toMatch(/Error: (all fields are required|Invalid email address)/);
});

// Cucumber expressions
When('I type a specific first name {string}', async function (this: CucumberWorld, firstName: string) {
    await this.contactUsPage.fillFirstName(firstName);
});

When('I type a specific last name {string}', async function (this: CucumberWorld, lastName: string) {
    await this.contactUsPage.fillLastName(lastName);
});

When('I enter a specific email address {string}', async function (this: CucumberWorld, email: string) {
    await this.contactUsPage.fillEmail(email);
});

When('I type specific text {string} and a number {int} within the home input field', async function (this: CucumberWorld, word: string, number: number) {
    await this.contactUsPage.fillComment(`${word} ${number}`);
});

// Random data faker
When('I type a random first name', async function (this: CucumberWorld) {
    const randomFirstName = faker.person.firstName();
    this.setFirstName(randomFirstName); // Set the random first name in the world object
    await this.contactUsPage.fillFirstName(randomFirstName);
});

When('I type a random last name', async function (this: CucumberWorld) {
    const randomLastName = faker.person.lastName();
    this.setLastName(randomLastName); // Set the random last name in the world object
    await this.contactUsPage.fillLastName(randomLastName);
});

When('I enter a random email address', async function (this: CucumberWorld) {
    const randomEmail = faker.internet.email();
    this.setEmailAddress(randomEmail); // Set the random email in the world object
    await this.contactUsPage.fillEmail(randomEmail);
});

When('I type a random comment', async function (this: CucumberWorld) {
    const randomComment = faker.lorem.sentence();
    await this.contactUsPage.fillComment(`Please could you contact me? \n thanks! ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()} \n ${randomComment}`);
});

// Scenario outline 
When('I type a specific first name {word} and last name {word}', async function (this: CucumberWorld, firstName: string, lastName: string) {
    await this.contactUsPage.fillFirstName(firstName);
    await this.contactUsPage.fillLastName(lastName);
});

When('I type an email address {string} and a comment {string}', async function (this: CucumberWorld, email: string, comment: string) {
    await this.contactUsPage.fillEmail(email);
    await this.contactUsPage.fillComment(comment);
});

Then('I should be presented with header text {string}', async function (this: CucumberWorld, message: string) {
    const headerText = await this.contactUsPage.getHeaderText(message);
    logger.info(`Header text: ${headerText}`);
    expect(headerText).toContain(message);
});