import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee = new Wopee();
const baseUrl = "https://dronjo.wopee.io";

test.describe("Example w. Wopee.io", () => {
  test("Home page test", async ({ page }, testInfo) => {
    await page.goto(baseUrl);

    await wopee.trackFullPage({
      page,
      stepName: `Landing page (${testInfo.project.name})`,
      scenarioName: testInfo.title,
      suiteName: testInfo.project.name,
    });

    await wopee.stopScenario();
  });
});
