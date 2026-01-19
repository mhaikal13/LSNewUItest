import { test, expect } from '@playwright/test';

let pageCrashed = false;
let jsError = false;

test.beforeEach(async ({ page }) => {
  await page.goto('https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjNmYWQ1NzVlLWQzNDItNDMyNS1hMWNiLWJlOTcxN2NkMjRlNCJ9.eyJyb29tSUQiOiJCUk0tQjEtQlJYIiwiY2FuS2lja1VzZXIiOmZhbHNlLCJtaWNGYWRlcklkIjo2LCJtaWNGYWRlckxhYmVsIjoiUkIiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1TRy1TVEFHSU5HIiwibmV0d29ya0NvZGUiOiJCUlgiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCcmlsbHV4IFJhZGlvIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2JyaWxsdXgtcmFkaW8ucG5nIiwicmFkaW9Db2RlIjoiQlJNIiwiY2hhbm5lbElkIjoiMTU5MyIsIm5ldHdvcmtJZCI6IjExNCIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiQlJNIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiIzOTRhZDliMi1lMGQ1LTQyNTQtOGM1YS03MTg3MDNlY2E2NDUiLCJpYXQiOjE3NTg1MzAzNDEsImV4cCI6MTgxMDM3MDM0MX0.mronKsJi0qo3Ua2_c_eMDQkJZFialOiUhcRiLjd509HD9PpNkV9xA8sdPIAYApxpihwqpFON_SGEEqrt7zfFAXSrdcLOQn7cajq5rQ7r-tKf9cqyaJ3OB56t_V_vquLGAH5xVmWv2VMWgCVRq99aEYnh-XW1B_dnXy2it-q8KDf9Ydmv14eWFCeJhzFAK-ki1FimpYQjL2pqOYHW4GSw9ecI28JkZPpgEUPeEAIj5FzVB9BomnaQ_frFJokSKgOsER_PvJh-V8EmkfyMttTHbzSa9vR4RVlZgn6z1SHcxzx681jZl61yEtZjsfmWf7JPJVo2Mea8PRaM8WxC7fjra6Uqb9ZcYjedy2u95ZxOlgVgvSw1fzzFJUlnzQmT63oXMrDUZNKCv5_QXNW8vZ5p2rnhGQGAtavTNHhNlbNuGCzd0rSh5kcDkbzQpUK4vO3AbLCPR0qMC5ohQT28LtW9N8agHe3S2IkMc-rFBuk16_XESiwziIRnXs0_ArbHayUcew73xYo3ipBRIlfX6hepfiFpb9G01HyPAIxRxHM0zoH7gNwfnxiL7T1pDJPuB8nwyXx-l2qWg14_9KZZ5g00tUpid4rsG_4-D2MF7vzE61ZgmrAuyFL378Ft0h5ZrGqnbbd5YrkQMcpWtIWcPLYx1e_fBiYRPlaEfSEEdIeQ76g');

page.on('crash', () => {
  pageCrashed = true;
});

page.on('pageerror', (err) => {
  jsError = true;
  console.error(err.message);
});


  const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();

});

test('PlayoutManualMode', async ({ page }) =>  {

const setting = page.locator('.settings-button').first();
await expect(setting).toBeVisible();
await expect(setting).toBeEnabled();
await setting.click();

const overlaysetting = page.getByText('Audio Replace ModeTrueFalseDisable Keyboard ShortcutsBoost ModeEcho');
await expect(overlaysetting).toBeVisible();
await expect(overlaysetting).toBeEnabled();


const DisableKeyboardShortcuts = page.locator('.react-switch-bg').first();
await expect(DisableKeyboardShortcuts).toBeVisible();
await expect(DisableKeyboardShortcuts).toBeEnabled();
await DisableKeyboardShortcuts.click();

const AudioReplaceMode = page.getByRole('combobox').nth(3);

await expect(AudioReplaceMode).toBeVisible();
await expect(AudioReplaceMode).toBeEnabled();
await AudioReplaceMode.selectOption('a');
await expect(AudioReplaceMode).toHaveValue('a');

const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.mouse.click(10, 10);


const content = page
  .getByTestId('info-[object Object]')
  .nth(2);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();


const target = page.getByText(/^Player 1/);
await content.dragTo(target);

// tekan keyboard 1
//await expect(target).toBeVisible();
await expect(target).toBeEnabled();

await target.click(); 
// fokus ke Player 1
await page.keyboard.press('1');


expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

await page.waitForTimeout(900);


});

test('PlayoutHotkey', async ({ page }) =>  {

    const content = page
  .getByTestId('info-[object Object]')
  .nth(2);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();

const clickHotkey = page.getByText(':01:24Day _ BuBettShowopener').first();
await expect(clickHotkey).toBeVisible();
await expect(clickHotkey).toBeEnabled();

await content.dragTo(clickHotkey);
await clickHotkey.click();


expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

});

//const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
//await expect(linkmode).toBeVisible();
//await expect(linkmode).toBeEnabled();
//await linkmode.click();

//const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
//await expect(PresetHotkey1).toBeVisible();
//await expect(PresetHotkey1).toBeEnabled();

//await content.dragTo(PresetHotkey1);



