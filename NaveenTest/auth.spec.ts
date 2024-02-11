import {
  test,
  Expect,
  Browser,
  Locator,
  BrowserContext,
  Page,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("auth test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");  or

  const username: string = "admin";
  const password: string = "admin";

  // const authHeader = "Basic " + btoa(username + ":" + password);
  // page.setExtraHTTPHeaders({ Authorization: authHeader });  or create function createAuthHeader();
  page.setExtraHTTPHeaders({
    Authorization: createAuthHeader(username, password),
  });

  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  // await new Promise(() => {}); // prevents your script from existing!!!
});
function createAuthHeader(username: any, password: any) {
  return "Basic " + btoa(username + ":" + password);
}
