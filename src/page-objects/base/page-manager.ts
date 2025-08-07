import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture'; // Adjust the import path as necessary

export class pageManager {
    get page(): Page {
        return pageFixture.page;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }
}