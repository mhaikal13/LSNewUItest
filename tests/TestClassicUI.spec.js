import { test, expect } from '@playwright/test';
import  {
  playerSongTitles, 
  playerOffButton,
  datePickerCalendarContainer, 
  settingsDialog, 
  ButtonOK, 
  playlistItemLinkModeIcon  , 
  playerByRole, 
  playlistItemByIndex, 
  settingsButton, 
  settingsSaveButton,
datePickerInput }  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjQ0NzgyMzQ2LTRiYzgtNDZiYy1iMzVmLTg5M2UzN2FhMGExMiJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiQlJNLU0xLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjoiNSIsIm1pY0ZhZGVyTGFiZWwiOiJSQyBURVNUIiwiYml0UmF0ZSI6MjU2MDAwLCJtaWNBbHdheXNPbiI6ZmFsc2UsInNlcnZlckNvZGUiOiJBV1MtU0ctU1RBR0lORyIsIm5ldHdvcmtDb2RlIjoiQlJYIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJhbHRlcm5hdGVWaWV3IjpmYWxzZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJyaWxsdXggUmFkaW8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYnJpbGx1eC1yYWRpby5wbmciLCJyYWRpb0NvZGUiOiJCUk0iLCJjaGFubmVsSWQiOiIxNTkzIiwibmV0d29ya0lkIjoiMTE0IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJCUk0iLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6ImMyNGZjN2U1LTk4YzUtNDBjOC04NGM4LTdhODhhNmUyNjdkZCIsImlhdCI6MTc3MDcxNzUxNSwiZXhwIjoxODIyNTU3NTE1fQ.NmwFO53GxRyPcHaoQUj3r0gxSymwQTJRApQ6RGHuVZhYWOx0eK_gF-mTYtjs8uro6lHXgKd_xABPUsa3gJUjtk6dXyi7M9zoXJ4KIy0STaZ-OeKwW1MK3JGU-fx1bfW78zpgUHqhLHVshKnDfh7f01ej9_pM0QvzbnGpIVPivLa9bPZCF7gVh7mIaCv6yy-3R_9LQjzZlI-0YkVuDjWtdt_sJiMzEiMVixf0Pz92gKg8AvWt06StXPcdZfGy6pt3JaPoBsBqp_TBUJIHeTuBsAQYU5wmY3qd29fXWMkM380LNOJOWpV31hvfQt4v7_6Npc1jav5ky0leKD99Alp4QybZBtu1AtkBhiUUDYoQAiDWFVT8cCuIT6H05bDqx4g9RGc72dcj1Zu3U-Jzvo7qlDT5JJ1EZm3GPjXpj2_CE3eBlIbzUJKHUcSkhlXrtlhtfuhVWn0HkJjArpiIgUGycmLnL1Pz8Qwb3jykW_wwwsnzAPOIdWvrXYeYhM8ho_3ysNhCX2lBYcqZgxXybrBNz-tW2P5b5ig9IbQvawgJDHXPSbGWQpxfuDpSVLCiZ5EKrz58XDfnLZWllSVaqDvqkeaO2PdLhHY7q9awlxi5uEqJzABnei9Kx36Z9-I20_d4K5mKdljvlM9uCcRd2etVy0f-EB3xUOywZ1RVK4B3thE';


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

  const overlaysetting = page.locator('.setting-dlg');
  await expect(overlaysetting).toBeVisible();
  await expect(overlaysetting).toBeEnabled();

const AudioReplaceMode = page.getByRole('combobox').nth(3);
await expect(AudioReplaceMode).toBeVisible();
await expect(AudioReplaceMode).toBeEnabled();
await AudioReplaceMode.click();
await AudioReplaceMode.selectOption('a');
await expect(AudioReplaceMode).toHaveValue('a');

const Save = page.locator(settingsSaveButton());
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.waitForTimeout(6000);
  await page.keyboard.press('Escape');
  
const Setting = page.locator('.setting-dlg');
await expect (Setting).not.toBeVisible();
await page.waitForTimeout(6000);



const scrollContainer = page.locator(datePickerCalendarContainer());
await expect(scrollContainer).toBeVisible();
await expect (scrollContainer).toBeEnabled();
await scrollContainer.click();

await page.waitForTimeout(6000);

const OptionDate =  page.getByRole('option', { name: 'Choose Tuesday, February 10th,' });
await expect(OptionDate).toBeVisible();
await expect(OptionDate).toBeEnabled();
await OptionDate.click();

await page.waitForTimeout(4000);

const OptionHour = page.getByRole('option', { name: '13', exact: true });
await OptionHour.scrollIntoViewIfNeeded();
await expect(OptionHour).toBeVisible();
await expect(OptionHour).toBeEnabled();
await OptionHour.click();

await page.waitForTimeout(10000);

const selectedDate = page.locator(datePickerCalendarContainer());
await expect.soft(selectedDate)
.toHaveText('Selected date: Tuesday, February 10th, 2026 at 1:00 PM');



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
await page.waitForTimeout(1000);
// Press key 2
  const player2button= page.locator(playerOffButton('2'));
await expect(player2button).toBeVisible();
await expect(player2button).toBeEnabled();
await player2button.click();

 
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
await page.waitForTimeout(1000);  
const player1button= page.locator(playerOffButton('1'));
await expect(player1button).toBeVisible();
await expect(player1button).toBeEnabled();
await player1button.click();


// Press key 1
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
const player3button= page.locator(playerOffButton('3'));
await expect(player3button).toBeVisible();
await expect(player3button).toBeEnabled();
await player3button.click();

console.log('---------------------------player 3 started--------------------------');

await page.waitForTimeout(16000);
  await page.close();


});

test('Link Mode Check', async ({ page }) =>  {

  await page.waitForTimeout(5000);

const Content1Linkmode = page.locator(playlistItemByIndex()).nth(4);
await Content1Linkmode.scrollIntoViewIfNeeded();
await expect(Content1Linkmode).toBeVisible();
await expect(Content1Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode1 = page.locator(playlistItemLinkModeIcon()).nth(4);
await expect(Linkmode1).toBeVisible();
await expect(Linkmode1).toBeEnabled();
await Linkmode1.click();
console.log('Clicked on Linkmode icon of Content1Linkmode');
await page.waitForTimeout(5000);

const Content2Linkmode = page.locator(playlistItemByIndex()).nth(5);
await Content2Linkmode.scrollIntoViewIfNeeded();
await expect(Content2Linkmode).toBeVisible();
await expect(Content2Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode2 = page.locator(playlistItemLinkModeIcon()).nth(5);
await expect(Linkmode2).toBeVisible();
await expect(Linkmode2).toBeEnabled();
await Linkmode2.click();
console.log('Clicked on Linkmode icon of Content2Linkmode');
await page.waitForTimeout(5000);

const Content3Linkmode = page.locator(playlistItemByIndex()).nth(6);
await Content3Linkmode.scrollIntoViewIfNeeded();
await expect(Content3Linkmode).toBeVisible();
await expect(Content3Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode3 = page.locator(playlistItemLinkModeIcon()).nth(6);
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

const player1button= page.locator(playerOffButton('1'));
await expect(player1button).toBeVisible();
await expect(player1button).toBeEnabled();
await player1button.click();


console.log('---------------------------player 1 link mode started--------------------------');


await page.waitForTimeout(420000);



  await page.close();

});


