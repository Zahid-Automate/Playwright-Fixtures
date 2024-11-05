𝟭. 𝗙𝗶𝘅𝘁𝘂𝗿𝗲 𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻:
 - We create custom fixtures by extending Playwright's base test
 - We define three fixtures: 'index.fixtures.ts and `auth.fixtures.ts` and `test-data.fixtures.ts`

 **auth.fixtures.ts**:<br/> 
   • Defines page-related fixtures (`loginPage`, `loggedInPage`)<br/> 
   • Handles authentication state<br/> 
   • Manages cleanup after tests<br/> 

**test-data.fixtures.ts**:<br/> 
   • Contains all test data<br/> 
   • Makes test data reusable<br/> 
   • Easy to maintain test data in one place<br/> 

**index.ts**:<br/> 
   • Central point for importing fixtures<br/> 
   • Makes test files cleaner<br/> 
   • Re-exports all necessary test components<br/> 

𝟮. 𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀:
 - Reduces code duplication
 - Makes tests cleaner and more maintainable
 - Centralizes common setup and teardown logic
 - Ensures consistent test state

𝟯. 𝗕𝗲𝘀𝘁 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀:
 - Fixtures are defined in a separate file
 - Each fixture has clear setup and cleanup phases
 - Fixtures can depend on other fixtures

The purpose of index.ts is to:

• Import and re-export all fixtures and utilities
• Provide a single entry point for importing test dependencies
• Make test files cleaner with consolidated imports

Without index.ts, you would need multiple imports in each test file.
 
 🎭 Why I Prefer Playwright Fixtures Over Storage State for E2E Testing

After extensive testing, here's why fixtures are my go-to choice:

✨ Key Benefits:
- Better test isolation - each test starts fresh
- Dynamic data handling - perfect for real-world scenarios
- Reusable setup/teardown logic across test suites
- Parameterizable - easily customize per test case
- Type-safe with TypeScript support

💡 Pro Tip: While storage state is great for simple auth flows, fixtures shine in complex scenarios where you need:
- Dynamic user data
- Complex test environments
- Detailed setup/teardown processes
- Shared testing utilities

Real talk: Storage state has its place, but fixtures give you that extra control and flexibility that modern web testing demands.

## Video grab showing test results
[screen-capture (17).webm](https://github.com/user-attachments/assets/5c71c1a1-e7d3-4c96-87b0-605fc9f501bc)
