import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture'; // Adjust the import path as necessary
import { HomePage } from "./../home-page"; 
import { ContactUsPage } from "../contactUs-page";
import { loginPortalPage } from "../login-portal-page";

export class pageManager {
    get page(): Page {
        return pageFixture.page;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }

    createHomePage() {
        return new HomePage();
    }

    createContactUsPage() {
        return new ContactUsPage();
    }

    createLoginPortalPage() {
        return new loginPortalPage();
    }
}