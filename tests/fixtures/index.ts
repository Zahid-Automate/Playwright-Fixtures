import { test as authTest } from './auth.fixtures';
import { TEST_DATA } from './test-data.fixtures';
import { expect } from '@playwright/test';

export const test = authTest;
export {
    expect,
    TEST_DATA
};
