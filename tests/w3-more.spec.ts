import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee: Wopee;
const baseUrl = "https://dronjo.wopee.io/gallery.html";

test.describe("Example w. Wopee.io", () => {
  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`test-${Math.floor(Math.random() * 1000) + 1}`);
  });

  test("Gallery", async ({ page }, testInfo) => {
    await wopee.startScenario(testInfo.title);
    await page.goto(baseUrl);

    await wopee.trackFullPageScreenshot(page, testInfo.title);

    await wopee.trackFullPageScreenshot(page, testInfo.title, {
      browser: testInfo.project.name,
      // Other available params:
      // os: "macOs",
      comment: "This is a test: https://wopee.io/ ",
      customTags: "prio 1",
      // pixelToPixelDiffTolerance: 100,
      device: "desktop",
      viewport: "1920x1080",
    });

    await wopee.stopScenario();
  });

  test("Test login flow", async ({ page }, testInfo) => {
    await wopee.startScenario(testInfo.title);
    await page.goto(baseUrl);

    await wopee.trackFullPageScreenshot(page, "Navigate to gallery page");

    page.click("a >> text=Sign in");
    await wopee.trackFullPageScreenshot(page, "Navigate to login screen");

    page.getByPlaceholder("Username").fill("marcel.veselka@tesena.com");
    await wopee.trackFullPageScreenshot(page, "Fill in username");

    page.getByPlaceholder("Password").fill("abc1234");
    await wopee.trackFullPageScreenshot(page, "Fill in password");

    page.click("button >> text=Sign in");
    await wopee.trackFullPageScreenshot(page, "Submit login form");

    await wopee.stopScenario();
  });
});
