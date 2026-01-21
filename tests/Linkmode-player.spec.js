import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://live-aps1.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6Ijk5NTJiOTdhLWJkOTYtNDM5ZS05YzZjLTMxN2QxN2ZhOWZmNiJ9.eyJ1c2VyTGl2ZUlkIjoiOTg4YWZkZGEtNjVlMC00ZDJhLWIxNzgtODFjNzk4MGU0MDM3Iiwicm9vbUlEIjoiQlJNLUIzLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjo0LCJtaWNGYWRlckxhYmVsIjoiTkVXIiwiYml0UmF0ZSI6MjU2MDAwLCJtaWNBbHdheXNPbiI6ZmFsc2UsInNlcnZlckNvZGUiOiJBV1MtSUQtSktUIiwibmV0d29ya0NvZGUiOiJCUlgiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInJlb3JkZXJGYWRlciI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsIm5ldHdvcmtNb2RlIjpmYWxzZSwiYWx0ZXJuYXRlVmlldyI6dHJ1ZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJyaWxsdXggUmFkaW8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYnJpbGx1eC1yYWRpby5wbmciLCJyYWRpb0NvZGUiOiJCUk0iLCJjaGFubmVsSWQiOiIxNTkzIiwibmV0d29ya0lkIjoiMTE0IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJCUk0iLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6Ijk5MjU3ZGQzLWY4MDQtNDhmYy1iZTJiLTUxYWY0ZGUwOTJjZSIsImlhdCI6MTc2ODk2NTY3NSwiZXhwIjoxNzY5NTcwNDc1fQ.vmh5xpkOkKjT9q0kAu02lyvszPwkcql-znZfeboN0pdj_wN1W_yy8xS6rJzYSyojXzkGxPigzDBCCjP3jQDHzaTmXsu2iakI_cgOoIpe7UgiHjXRK5QT9G3ANcr8sJYjs4BgzQJMxkX9EXVO9fgb-LENhySshPuAkJtrH4UjQBJB6JY9J4oMDvEWsOIaNzHvwhTCA9L6vK0bQvSvs03FEeIxaswZSVI1Jmpp756KcxTNhvVvXUEvzewCYz9JY5r668p01Z3CWQdJ3s6aDXwLQOmfzVlhYQS5TsyaXz_EUHgQ6p7hh7sDY7vH8ok1t1bJ_9n3bDvDeHbpnMehNXP587AxEQRBUltsVaEEmI0ecIVRKTdovr4TTPtRDFPyqg5bkEDOo-e0b8_MjHellyh2ZiUPqsM45wPnYmUoocsEGq3GUX4_ylmXRbOErnUYXFvJhS_vMrwMx0wC7KP-4sdbPptuo0Bjihop6Ed7N4_OuKLO2YvcWRaAUdAC1kIjKqUt07JmgefTy-mZLVyrHCrmu0eJpcKPdAcrIn9zM93TZyDvNhHPl_W8GQVicqMC_bz47y5C6p2_LhlharVcv7em6siVGyN3xVonkbQFJM4yzUSkdK1aoL9aaGHCQ3vDLW1mfpjMRwAxQ3CmQtjoBAcLFLKTOdsZ1FmA4nJeUDu-5Xs');


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

test('BUG LINK MODE', async ({ page }) =>  {

  const playlist = page.getByTestId('info-[object Object]').nth(2);
  await expect(playlist).toBeVisible();
await expect(playlist).toBeEnabled();

const addaudio = page.locator('.header-playlist > div:nth-child(3)');
await expect(addaudio).toBeVisible();
await expect (addaudio).toBeEnabled();
await addaudio.click();


const overlayaddaudio = page.getByText('Add Audio---all---');
await expect(overlayaddaudio).toBeVisible();
await expect(overlayaddaudio).toBeEnabled();

const typecontent = page.getByRole('combobox');
await expect(typecontent).toBeVisible();
await expect(typecontent).toBeEnabled();
await typecontent.selectOption('12000');

 
const contentaddaudio = page.getByText('00:01:0421.01.26 10.01 - 12.');
await expect(contentaddaudio).toBeVisible();
await expect(contentaddaudio).toBeEnabled();

const contentDrop = page.getByTestId('info-[object Object]').nth(2);
await expect(contentDrop).toBeVisible({timeout:700});
await expect(contentDrop).toBeEnabled();


await contentaddaudio.dragTo(contentDrop);

//Exit Overlay Add Audio
const X= page.locator('.song-header > svg');
await expect (X).toBeVisible();
await expect(X).toBeEnabled();
await X.click();

const content1 = page.getByTestId('info-[object Object]').nth(2);
await expect(content1).toBeVisible();
await expect(content1).toBeEnabled();

const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
await expect(linkmode).toBeVisible();
await expect(linkmode).toBeEnabled();
await linkmode.click();


const player1 = page.getByText(/^Player 1/);
await content1.dragTo(player1);

// tekan keyboard 1
//await expect(target).toBeVisible();
await expect(player1).toBeEnabled();


  
await player1.click(); 
// fokus ke Player 1
await page.keyboard.press('1');

});
