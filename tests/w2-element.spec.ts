import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee: Wopee;
const baseUrl = "https://dronjo.wopee.io/gallery.html";

test.describe("Example w. Wopee.io", () => {
  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`test-${Math.floor(Math.random() * 1000) + 1}`);
  });

  test("Check logo", async ({ page }, testInfo) => {
    await wopee.startScenario(testInfo.title);
    await page.goto(baseUrl);

    const locator = page.locator(".navbar-brand img");
    await wopee.trackElement({ stepName: `logo`, locator });

    await wopee.stopScenario();
  });
});
