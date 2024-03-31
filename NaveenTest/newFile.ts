import { test, Browser, Page } from "@playwright/test";
import { chromium } from "@playwright/test";
import path from "path";

// upload multiple fields
test("upload multiple fields", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  page
    .locator("//input[@id='filesToUpload']")
    .setInputFiles([
      path.join("NaveenTest/name-2.xml"),
      path.join("NaveenTest/name.json"),
    ]);

  // deselect files
  await page.waitForTimeout(3000);
  await page.locator("//input[@id='filesToUpload']").setInputFiles([]);

  // buffer file
  await page.locator("//input[@id='filesToUpload']").setInputFiles({
    name: "JarenWalter.txt",
    phone: "+1 577-646-1072",
    email: "jaren_walter89@yahoo.com",
    currency: "$ 7,475,048",
    buffer: Buffer.from("this is a new client"),
  });
  await page.waitForTimeout(5000);
});
