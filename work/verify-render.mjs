import { createRequire } from "node:module";

const require = createRequire("/Users/abhishekyadav/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/");
const { chromium } = require("playwright");

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
await desktop.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
await desktop.waitForTimeout(1200);
await desktop.screenshot({ path: "/private/tmp/portfolio-desktop.png", fullPage: false });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
await mobile.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1200);
await mobile.screenshot({ path: "/private/tmp/portfolio-mobile.png", fullPage: false });

await desktop.locator("#projects").scrollIntoViewIfNeeded();
await desktop.waitForTimeout(500);
await desktop.screenshot({ path: "/private/tmp/portfolio-projects.png", fullPage: false });

const result = {
  title: await desktop.title(),
  hero: await desktop.locator("h1").innerText(),
  sections: await desktop.locator("main section").count(),
  visibleProjectsLabel: await desktop.locator("#projects").getByText(/matching project placeholders/).innerText()
};

await browser.close();
console.log(JSON.stringify(result, null, 2));
