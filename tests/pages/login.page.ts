import { Page, expect } from '@playwright/test';
import { TEST_IDS } from '../utils/test-ids';

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.goto('/login');
    await this.page.fill(TEST_IDS.login.emailInput, email);
    await this.page.fill(TEST_IDS.login.passwordInput, password);
    await this.page.click(TEST_IDS.login.submitButton);
    await this.page.waitForURL('/flights/start');
    const logInSuccess =await this.page.locator('//div[@id="flash_notice"]').innerText();
    expect(logInSuccess).toBe('Signed in!');
  }
}