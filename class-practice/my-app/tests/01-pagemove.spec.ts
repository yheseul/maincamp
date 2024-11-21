import { test, expect } from "@playwright/test";

test("페이지 이동 시나리오", async ({ page }) => {
  await page.goto("http:localhost:3000/section34/34-06-playwright-e2e-test");

  await page.click("text=move");

  await expect(page).toHaveURL(
    "http:localhost:3000/section34/34-06-playwright-e2e-test-moved"
  );

  await expect(page.locator("h1")).toContainText("play");
});
