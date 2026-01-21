import { test, expect } from '@playwright/test';

const URL = 'https://live-aps1.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6Ijk5NTJiOTdhLWJkOTYtNDM5ZS05YzZjLTMxN2QxN2ZhOWZmNiJ9.eyJ1c2VyTGl2ZUlkIjoiOTg4YWZkZGEtNjVlMC00ZDJhLWIxNzgtODFjNzk4MGU0MDM3Iiwicm9vbUlEIjoiQlJNLUIzLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjo0LCJtaWNGYWRlckxhYmVsIjoiTkVXIiwiYml0UmF0ZSI6MjU2MDAwLCJtaWNBbHdheXNPbiI6ZmFsc2UsInNlcnZlckNvZGUiOiJBV1MtSUQtSktUIiwibmV0d29ya0NvZGUiOiJCUlgiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInJlb3JkZXJGYWRlciI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsIm5ldHdvcmtNb2RlIjpmYWxzZSwiYWx0ZXJuYXRlVmlldyI6dHJ1ZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJyaWxsdXggUmFkaW8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYnJpbGx1eC1yYWRpby5wbmciLCJyYWRpb0NvZGUiOiJCUk0iLCJjaGFubmVsSWQiOiIxNTkzIiwibmV0d29ya0lkIjoiMTE0IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJCUk0iLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6Ijk5MjU3ZGQzLWY4MDQtNDhmYy1iZTJiLTUxYWY0ZGUwOTJjZSIsImlhdCI6MTc2ODk2NTY3NSwiZXhwIjoxNzY5NTcwNDc1fQ.vmh5xpkOkKjT9q0kAu02lyvszPwkcql-znZfeboN0pdj_wN1W_yy8xS6rJzYSyojXzkGxPigzDBCCjP3jQDHzaTmXsu2iakI_cgOoIpe7UgiHjXRK5QT9G3ANcr8sJYjs4BgzQJMxkX9EXVO9fgb-LENhySshPuAkJtrH4UjQBJB6JY9J4oMDvEWsOIaNzHvwhTCA9L6vK0bQvSvs03FEeIxaswZSVI1Jmpp756KcxTNhvVvXUEvzewCYz9JY5r668p01Z3CWQdJ3s6aDXwLQOmfzVlhYQS5TsyaXz_EUHgQ6p7hh7sDY7vH8ok1t1bJ_9n3bDvDeHbpnMehNXP587AxEQRBUltsVaEEmI0ecIVRKTdovr4TTPtRDFPyqg5bkEDOo-e0b8_MjHellyh2ZiUPqsM45wPnYmUoocsEGq3GUX4_ylmXRbOErnUYXFvJhS_vMrwMx0wC7KP-4sdbPptuo0Bjihop6Ed7N4_OuKLO2YvcWRaAUdAC1kIjKqUt07JmgefTy-mZLVyrHCrmu0eJpcKPdAcrIn9zM93TZyDvNhHPl_W8GQVicqMC_bz47y5C6p2_LhlharVcv7em6siVGyN3xVonkbQFJM4yzUSkdK1aoL9aaGHCQ3vDLW1mfpjMRwAxQ3CmQtjoBAcLFLKTOdsZ1FmA4nJeUDu-5Xs';

let pageCrashed = false;
let jsError = false;

test.beforeEach(async ({ page }) => {
     pageCrashed = false;
 jsError = false;

 page.on('crash', () => pageCrashed = true);
  page.on('pageerror', () => jsError = true);

    await page.goto(URL);

 const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();


const setting = page.locator('.settings-button').first();
await expect(setting).toBeVisible();
await expect(setting).toBeEnabled();
await setting.click();

const overlaysetting = page.getByText('Audio Replace ModeTrueFalseDisable Keyboard ShortcutsBoost ModeEcho');
await expect(overlaysetting).toBeVisible();
await expect(overlaysetting).toBeEnabled();


const AudioReplaceMode = page.getByRole('combobox').nth(3);
await expect(AudioReplaceMode).toBeVisible();
await expect(AudioReplaceMode).toBeEnabled();
await AudioReplaceMode.click();
await AudioReplaceMode.selectOption('a');
await expect(AudioReplaceMode).toHaveValue('a');

const DisableKeyboardShortcuts = page.locator('.react-switch-bg').first();
await expect(DisableKeyboardShortcuts).toBeVisible();
await expect(DisableKeyboardShortcuts).toBeEnabled();
await DisableKeyboardShortcuts.click();



const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.mouse.click(10, 10);

});

test('PlayoutManualMode', async ({ page }) =>  {

const PlaylistDatePicker = page.locator('.react-datepicker__input-container');
await expect(PlaylistDatePicker).toBeVisible();
await expect (PlaylistDatePicker).toBeEnabled();
await PlaylistDatePicker.click();

const scrollContainer = page.getByRole('dialog', { name: 'Choose Date and Time' });
await expect(scrollContainer).toBeVisible();
await expect (scrollContainer).toBeEnabled();

const OptionDate =  page.getByRole('option', { name: 'Choose Monday, January 19th,' });
await expect(OptionDate).toBeVisible();
await expect(OptionDate).toBeEnabled();
await OptionDate.click();


const OptionHour = page.getByRole('option', { name: '07' });
//await OptionHour.scrollIntoViewIfNeeded();
await expect(OptionHour).toBeVisible();
await expect(OptionHour).toBeEnabled();
await OptionHour.click();


const content = page.getByTestId('info-[object Object]').nth(2);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();


const target = page.getByText(/^Player 1/);
await content.dragTo(target);



const content2 = page
  .getByTestId('info-[object Object]')
  .nth(3);

await expect(content2).toBeVisible();
await expect(content2).toBeEnabled();


const target2 = page.getByText(/^Player 2/);
await content2.dragTo(target2);

// tekan keyboard 1
//await expect(target).toBeVisible();
await expect(target2).toBeEnabled();


await expect(target).toBeEnabled();
await target.click();
// fokus ke Player 1
await page.keyboard.press('1');

await page.keyboard.press('2');


expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

//await page.waitForTimeout(900);


});

test('PlayoutHotkey', async ({ page }) =>  {

    const content = page
  .getByTestId('info-[object Object]')
  .nth(4);

await expect(content).toBeVisible({timeout:10000});
await expect(content).toBeEnabled();

const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
await expect(PresetHotkey1).toBeVisible();
await expect(PresetHotkey1).toBeEnabled();

await content.dragTo(PresetHotkey1);
await PresetHotkey1.click();


expect(pageCrashed).toBe(true);
expect(jsError).toBe(true);

});




//const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
//await expect(linkmode).toBeVisible();
//await expect(linkmode).toBeEnabled();
//await linkmode.click();

//const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
//await expect(PresetHotkey1).toBeVisible();
//await expect(PresetHotkey1).toBeEnabled();

//await content.dragTo(PresetHotkey1);



