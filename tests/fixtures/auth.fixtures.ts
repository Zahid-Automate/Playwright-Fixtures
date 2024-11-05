import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { TEST_DATA } from './test-data.fixtures';

type AuthFixtures = {
    loggedInPage: any;
    loginPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({
    // LoginPage fixture
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    // LoggedInPage fixture - provides an authenticated page
    loggedInPage: async ({ page, loginPage }, use) => {
        // Login with default test user
        await loginPage.login(TEST_DATA.users.default.email,
                            TEST_DATA.users.default.password);
        await use(page);
        // Cleanup: logout after test
        await page.click("//a[normalize-space()='Sign off']");
    }
});