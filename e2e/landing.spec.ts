import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("renders all four sections in order", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/3D-Medical/);

    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toContainText("Reading the brain");
    await expect(h1).toContainText("in three dimensions");

    await expect(
      page.getByRole("heading", { level: 2, name: /third dimension is missing/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /volumetric models/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /one engineer/i })
    ).toBeVisible();
  });

  test("hero CTAs and SPH badge are wired correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /open a conversation/i })).toHaveAttribute(
      "href",
      "mailto:saitkazinov@3d-medical.ch"
    );
    await expect(page.getByRole("link", { name: /read the dossier/i })).toHaveAttribute(
      "href",
      "#problem"
    );
    await expect(page.getByRole("img", { name: /eth student project house/i }).first()).toBeVisible();
  });

  test("'Read the dossier' scrolls the problem section into view", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /read the dossier/i }).click();
    await expect(page).toHaveURL(/#problem$/);
    await expect(page.locator("section#problem")).toBeInViewport();
  });

  test("about section links resolve to expected destinations including GitHub", async ({ page }) => {
    await page.goto("/");
    const about = page.locator("section#about");
    await expect(about.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/"
    );
    await expect(about.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/shyngys-aitkazinov"
    );
    await expect(
      about.getByRole("link", { name: /saitkazinov@3d-medical\.ch/i })
    ).toHaveAttribute("href", "mailto:saitkazinov@3d-medical.ch");
    await expect(
      about.getByRole("link", { name: /saitkazinov@ethz\.ch/i })
    ).toHaveAttribute("href", "mailto:saitkazinov@ethz.ch");
  });

  test("footer index links jump to each section", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await footer.getByRole("link", { name: /02.*the approach/i }).click();
    await expect(page).toHaveURL(/#approach$/);
    await expect(page.locator("section#approach")).toBeInViewport();
  });

  test("no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1
    );
    expect(hasOverflow).toBe(false);
  });

  test("full-page visual snapshot", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.addStyleTag({
      content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
    });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `screenshots/landing-${testInfo.project.name}.png`,
      fullPage: true,
      animations: "disabled",
    });
  });
});
