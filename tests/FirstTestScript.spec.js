const { test, expect } = require("@playwright/test")

test("Oracle Navigator", async function ({ page }) {

    await page.goto("https://iarzqy-test.fa.ocs.oraclecloud.com/")

    await page.locator("//input[@placeholder='User name or email']").fill("Lisa.Rose", { delay: 100 })

    await page.locator("//input[@placeholder='Password']").fill("Navigator_123", { delay: 200 })

    await page.locator(" //oj-button[@id='idcs-signin-basic-signin-form-submit']").click()

    await page.locator('//a[contains(@id,"_UIShome")]').click()

    await page.locator('//a[contains(@id,"tooltipNext")]').click()

    await page.locator("//a[@id='groupNode_manager_resources']").click()

    await page.locator("//a[contains(@id, 'resources_Touchpoints')]").click()

    await page.locator("//span[@class='oj-navigationlist-item-label']/span[text()='Employees']").click()

    //await page.pause();

    await page.locator("//*[text()='Colby Murphy']/following::span[contains(@class,'oj-button-menu-icon-only-dropdown-icon')][1]").click();

    await page.locator("//a[text()='Schedule Check-In']").click()

    const dropdown1 = page.locator("//input[@id='review-period-lov|input']")

    await dropdown1.fill('Review Period - 2033')

    await page.keyboard.press('ArrowUp');

    //await page.pause();

    await page.keyboard.press("Enter")

    await page.getByRole('combobox', { name: 'Template' }).click();

    await page.getByRole('row', { name: 'Check-in for Touchpoints' }).click();


    await page.locator('text=/mm12\/dd30\/yyyy2025/').click();


    await page.getByRole('combobox', { name: 'Frequency' }).click();

    await page.getByRole('row', { name: 'Never' }).click();

    await page.locator("//span[text()='Schedule']").click()

    await page.locator("//div[contains(@class,'oj-avatar-xxs') and contains(@class,'oj-avatar-image')]").click()

    await page.locator("//a[text()='Sign Out']").click()

});