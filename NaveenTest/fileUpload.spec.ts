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
import path from "path";
test("file upload", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
  await page
    .locator("input[name='upfile']")
    .setInputFiles("NaveenTest/name.json");

  await page.waitForTimeout(5000);
});

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

  // upload file from buffer memory
  await page.waitForTimeout(3000);
  await page.locator("//input[@id='filesToUpload']").setInputFiles({
    name: "JarenWalter.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is a new client"),
  });
  await page.waitForTimeout(5000);
});
