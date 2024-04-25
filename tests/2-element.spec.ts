import { test, expect } from "@playwright/test";

const baseUrl = "https://dronjo.wopee.io/gallery.html";

test("Dronjo gallery page - visual test", async ({ page }) => {
  await page.goto(baseUrl);

  const galleryImages = page.locator(".row").first();
  await expect(galleryImages).toHaveScreenshot();
});
