# Workshop: Getting Started with Playwright Visual Testing

## Setup

### Set up VS Code and Playwright

- Install Node.js: https://nodejs.org/en/download/
- Set up VS Code and Playwright: https://playwright.dev/docs/getting-started-vscode

### Clone this repository

In VS code: Ctrl+Shift+P -> Git: Clone -> link to this repository

```link
https://github.com/autonomous-testing/ws-getting-started-w-playwright-visual-testing
```

### Set up the environment

```shell
export WOPEE_API_KEY=your_api_key
```

```shell
export GITHUB_TOKEN=your_github_token
```

Get your `WOPEE_API_KEY` from Wopee.io commander (Navigate to project > Project Settings > API KEYS tab > Create new key). The `GITHUB_TOKEN` will be provided during the workshop.

### Install node dependencies

```shell
npm i
```

## Agenda

1. First test: `npx playwright test tests/1-first.spec.ts`

2. Working with reports:

- Change the `baseUrl` by adding `/gallery.html` to the URL
- Run the test: `npx playwright test tests/1-first.spec.ts` again
- Open the report in the browser: `npx playwright show-report`
- Explore how visual diffs are reported

3. Updating snapshots: `npx playwright test -u`

   Alternatively: You can update only some tests, see Playwright documentation about [Command line](https://playwright.dev/docs/test-cli) options and [Tagging test](https://playwright.dev/docs/test-annotations#tag-tests)

4. Why Visual Testing is a good idea and why not (slides).

5. Testing specific element: `npx playwright test tests/2-element.spec.ts`

6. Running tests in UI mode: `npx playwright test --headed tests/2-element.spec.ts` or `npx playwright test --ui`

7. More advanced visual testing: `npx playwright test tests/3-advanced.spec.ts`

   See also documentation: [toHaveScreenshot](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)

8. Good practices for visual testing (slides).

9. First test with Wopee.io: `npx playwright test tests/w1-basics.spec.ts`

- Wopee.io Commander: https://cmd.wopee.io/
- Make sure keys (`WOPEE_API_KEY` and `GITHUB_TOKEN`) are set up correctly

10. Working with Wopee.io commander:

- Approve baseline
- Explore how visual diffs are reported
- Explore baseline tab

11. [optional]

- Testing specific element: `npx playwright test tests/w2-element.spec.ts`
- More options for visual testing, more complex scenario example: `npx playwright test tests/3-more.spec.ts`

12. Other ideas (slides).

## Next steps

Do you have any idea how to improve this workshop or Wopee.io?
Share it with us: https://github.com/orgs/Wopee-io/discussions/new?category=ideas

Do you have any questions or need help?
Ask us here: https://github.com/orgs/Wopee-io/discussions/new?category=q-a

Would you like to help us improve Wopee.io?
PRs are welcome here: https://github.com/autonomous-testing/ws-getting-started-w-playwright-visual-testing/pulls
