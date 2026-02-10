import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, playerElapsedTime}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjE0ZTQ0NThlLWEwZTEtNDNkYi1iYzcyLWE3OWZiZmMyMmVjMyJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiQlJNLUIzLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjoiNCIsIm1pY0ZhZGVyTGFiZWwiOiJSQyBURVNUMiIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLVNHLVNUQUdJTkciLCJuZXR3b3JrQ29kZSI6IkJSWCIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwiYWx0ZXJuYXRlVmlldyI6dHJ1ZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJyaWxsdXggUmFkaW8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYnJpbGx1eC1yYWRpby5wbmciLCJyYWRpb0NvZGUiOiJCUk0iLCJjaGFubmVsSWQiOiIxNTkzIiwibmV0d29ya0lkIjoiMTE0IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJCUk0iLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6ImJhYjc2NzNiLTYyNGMtNDkxZC1hNjBmLTI1MjQ1NjdjMTgzOCIsImlhdCI6MTc3MDYwMjA2MywiZXhwIjoxODIyNDQyMDYzfQ.LbaBWk_uItIjxk2fkLIVCcuruE17lusTUEocpwAZAFy84L4RjqjAP9chdtFXR5DbjduwjMuD40Ynd4Y3PlaGe475bdZ3rlQ1apLsC7Q28XVha9JBSNIU8uApJGQrpOqeFj8yHwbbR_W_epnPTRsWv-t7C8ALGcOmXYcYDL-9dZCHEuTBbGXQ9pY5lztFpQliUmj49MFDYrZj0YtCJyj5Y3TVtDfy0sx-yRclQLqZ_qFZkXNB2kP0nkiijtyhA6P-T25lnW6cB0nZ6_k7xY_lEyIvDMlFDFtEKvneVPWn5OvHgd8ib2OiUGE-46vqzI_ARzg56TFD_FPxHx2d5-_WwRpd_6MWuSzBmb9yvtrLaoS6h-NadvQVUlfcHQ0iCXbgBo2fADU_l1T7ApRUvcv63tkWk5VGVIG_Om0p3fenizL0N0szmkssjNkyGxInjlvSJc-Ds0V6vBPzLtWteHPi737_tjQsU-9eHEMm9LBb7ZSsudI5pT-TjVwE_vSvDLavL_7ClmZBWjxcOOP2Js2fipjTAg_u6O_BZzup_kQInjOdO52bTNynoBMrNtML7FQPKqBMppEpBOqdkLeoFdkE7urBbtFYPceE9taMvJ6mDCJqchN1mLlkYFMI2EOMzZu5zkbwFHUUReYperK66Ky2ltZzfKXz0y9FQtZcJZsP7M8';

test.beforeEach(async ({ page }) => {

    await page.goto(URL);
   
   const context = page.context();
  const cdpSession = await context.newCDPSession(page);
  await cdpSession.send('Emulation.setPageScaleFactor', {
    pageScaleFactor: 0.8,
  });

  const okButton = page.locator(ButtonOK());
  await expect (okButton).toBeVisible({ timeout: 10000 });
  await expect(okButton).toBeEnabled();
  await okButton.click();


  const settingsBtn = page.locator(settingsButton());
  await expect.soft(settingsBtn).toBeVisible();
  await expect.soft(settingsBtn).toBeEnabled();
  await settingsBtn.click();

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

const Save = page.locator(settingsSaveButton());
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.waitForTimeout(6000);
  await page.keyboard.press('Escape');
  
const Setting = page.locator(settingsDialog());
await expect (Setting).not.toBeVisible();
await page.waitForTimeout(6000);



// const scrollContainer = page.locator(datePickerCalendarContainer());
// await expect(scrollContainer).toBeVisible();
// await expect (scrollContainer).toBeEnabled();
// await scrollContainer.click();

// await page.waitForTimeout(6000);

// const OptionDate =  page.getByRole('option', { name: 'Choose Thursday, February 5th,' });
// await expect(OptionDate).toBeVisible();
// await expect(OptionDate).toBeEnabled();
// await OptionDate.click();

// await page.waitForTimeout(4000);

// const OptionHour = page.getByRole('option', { name: '11', exact: true });
// await OptionHour.scrollIntoViewIfNeeded();
// await expect(OptionHour).toBeVisible();
// await expect(OptionHour).toBeEnabled();
// await OptionHour.click();

await page.waitForTimeout(10000);

const selectedDate = page.locator(datePickerCalendarContainer());
await expect (selectedDate).toBeVisible();
await expect.soft(selectedDate)
.toHaveText('Selected date: Thursday, February 5th, 2026 at 11:00 AM');


});


test('LiveStudio CHECK PLAYER', async ({ page }) =>  {

const contentPlayer2 = page.locator(playlistItemByIndex()).nth(7);
await contentPlayer2.scrollIntoViewIfNeeded();
await expect(contentPlayer2).toBeVisible();
await expect(contentPlayer2).toBeEnabled();


const playerByrole2 = page.locator(playerByRole('player2'));
await expect(playerByrole2).toBeVisible();
await expect(playerByrole2).toBeEnabled({ timeout: 10000 });

await contentPlayer2.dragTo(playerByrole2); 

await page.mouse.up();

await page.waitForTimeout(7000);  
// Ensure page has focus before pressing keyboard
await playerByrole2.click();
await page.waitForTimeout(700);
// Press key 2
  await page.keyboard.press('2');
 
console.log('---------------------------player 2 started--------------------------');


await page.waitForTimeout(16000);

  const playerByrole = page.locator(playerByRole('player1'));
await expect(playerByrole).toBeVisible();
await expect(playerByrole).toBeEnabled({ timeout: 10000 });

  const contentPlayer1 = page.locator(playlistItemByIndex()).nth(5);
await contentPlayer1.scrollIntoViewIfNeeded();
await expect(contentPlayer1).toBeVisible();
await expect(contentPlayer1).toBeEnabled();

await contentPlayer1.dragTo(playerByrole); 

await page.mouse.up();

console.log('Drag and Drop Content to Player1'); 
await page.waitForTimeout(7000);  
await playerByrole.click();

// Press key 1
await page.keyboard.press('1');
console.log('---------------------------player 1 started--------------------------');

await page.waitForTimeout(16000);


const contentPlayer3 = page.locator(playlistItemByIndex()).nth(6);
await contentPlayer3.scrollIntoViewIfNeeded();
await expect(contentPlayer3).toBeVisible();
await expect(contentPlayer3).toBeEnabled({ timeout: 10000 });

const playerByrole3 = page.locator(playerByRole('player3'));
await expect(playerByrole3).toBeVisible();
await expect(playerByrole3).toBeEnabled({ timeout: 10000 });

await contentPlayer3.dragTo(playerByrole3); 
await page.mouse.up();

console.log('Drag and Drop Content to Player3'); 
await page.waitForTimeout(7000);
await playerByrole3.click();

// Press key 3
await page.keyboard.press('3');
console.log('---------------------------player 3 started--------------------------');

await page.waitForTimeout(16000);


});

test('Link Mode Check', async ({ page }) =>  {

const Content1Linkmode = page.locator(playlistItemByIndex()).nth(2);
await Content1Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content1Linkmode).toBeVisible();
await expect.soft(Content1Linkmode).toBeEnabled(); 

const Linkmode1 = page.locator(playlistItemLinkModeIcon()).nth(2);
await expect(Linkmode1).toBeVisible();
await expect(Linkmode1).toBeEnabled();
await Linkmode1.click();
console.log('Clicked on Linkmode icon of Content1Linkmode');
await page.waitForTimeout(5000);

const Content2Linkmode = page.locator(playlistItemByIndex()).nth(3);
await Content2Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content2Linkmode).toBeVisible();
await expect.soft(Content2Linkmode).toBeEnabled(); 

const Linkmode2 = page.locator(playlistItemLinkModeIcon()).nth(3);
await expect(Linkmode2).toBeVisible();
await expect(Linkmode2).toBeEnabled();
await Linkmode2.click();
console.log('Clicked on Linkmode icon of Content2Linkmode');
await page.waitForTimeout(5000);

const Content3Linkmode = page.locator(playlistItemByIndex()).nth(4);
await Content3Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content3Linkmode).toBeVisible();
await expect.soft(Content3Linkmode).toBeEnabled();

const Linkmode3 = page.locator(playlistItemLinkModeIcon()).nth(4);
await expect(Linkmode3).toBeVisible();
await expect(Linkmode3).toBeEnabled();
await Linkmode3.click();
console.log('Clicked on Linkmode icon of Content3Linkmode');
await page.waitForTimeout(5000);

const player1linkmode= page.locator(playerByRole('player1'));
await expect(player1linkmode).toBeVisible();
await expect(player1linkmode).toBeEnabled();

await Content1Linkmode.dragTo(player1linkmode);
await page.mouse.up();


console.log('Drag and Drop Linkmode Content to Player1');
await player1linkmode.click();
await page.waitForTimeout(7000);
await page.keyboard.press('1');
console.log('---------------------------player 1 link mode started--------------------------');


await page.waitForTimeout(420000);

});


