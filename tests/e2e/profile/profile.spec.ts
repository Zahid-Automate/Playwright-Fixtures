import { test, expect } from '../../fixtures';

test.describe('Book a ticket', () => {
  test('User makes flight Selection', async ({ loggedInPage }) => {
    await loggedInPage.selectOption('select[name="fromPort"]', { label: 'Sydney' });
    await loggedInPage.selectOption('select[name="toPort"]', { label: 'New York' });
    await loggedInPage.selectOption('select[name="departMonth"]', { label: 'November 2024' });
    await loggedInPage.selectOption('select[name="returnMonth"]', { label: 'December 2024' });
    await loggedInPage.getByRole('checkbox').first().click();
    await loggedInPage.click('[type="submit"]');
  
  });
});