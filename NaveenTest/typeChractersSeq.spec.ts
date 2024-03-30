import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  FrameLocator,
} from "@playwright/test";
import { log } from "console";
import { webkit, chromium, firefox } from "@playwright/test";

test("Type characters sequentially", async () => {
  const browser: Browser = await webkit.launch({
    headless: false,
    channel: "webkit",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.flipkart.com/");
  await page
    .getByPlaceholder("Search for Products, Brands and More")
    .pressSequentially("macbook", { delay: 500 });

  await page.waitForTimeout(10000);
});
