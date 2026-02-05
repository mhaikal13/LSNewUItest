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
  settingsSaveButton}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6Ijc1NWQ4ZmI5LTc3ODAtNGIyYS1hODkwLTY1NTg3YWVlMzY5MSJ9.eyJ1c2VyTGl2ZUlkIjoiYWNjMWRhNTEtOGNkNC00ODM2LWJjMDgtM2NhMGRhOTdjYTlkIiwicm9vbUlEIjoiTUE4LU0xLUFVRCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjo0LCJtaWNGYWRlckxhYmVsIjoiUkMiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1TRy1TVEFHSU5HIiwibmV0d29ya0NvZGUiOiJBVUQiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInJlb3JkZXJGYWRlciI6ZmFsc2UsInRpbWVab25lIjoiQW1lcmljYS9DaGljYWdvIiwibmV0d29ya01vZGUiOmZhbHNlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiOTQuOSBXT0xYIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL3dvbHgtZm0tbWFkaXNvbiwtd2kucG5nIiwicmFkaW9Db2RlIjoiTUE4IiwiY2hhbm5lbElkIjoiMTgyMyIsIm5ldHdvcmtJZCI6IjU4IiwiZm9ybWF0SWQiOiIyIn1dLCJsb2NhbENvZGUiOiJNQTgiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjRjNWNkZTY5LTRkNDYtNDQzMi04YzFmLTU5NWVkOWZiM2I1OSIsImlhdCI6MTc3MDI3MzU1NCwiZXhwIjoxNzcwMzU5OTU0fQ.oTheoSaM-AjJ5XsbY4_6PsJh2K2bU0qt_yzBroL8hyFtjP19-uWa5-4akt5MBHgh7Qhc1gFIwoOjMlUhbvNMhKyj7ZckMJkbOAS7Caoo_lbuq7hdyaqpKgxDzx8W42uh6n_w2uacczXCuPmeDSj6GD6r_FRKbQo32a50ER7iZdxa697N1viKE8Q0cbWfwGzxxC_kIQsxLpTeEFBMLN7yvCcTzMBcqMt61jldrqAvfwZsTcjyvOebXDfD0PlmPqIBiZjA_o-sbqrBAPePJA8Y06npvLBPfOALT7i_EPEs5a-DrhWLs0vID6RnQvbI3hK3BTUfrBQRpXQxUy8QIrKOIxS9YHrQ5V-_fdwEuY3i2zT0IH6YapiZUuCWBDH_voH3MrXaZlP9Sn2tjBE28v3B5SAonUNrTSkCbOjxBPO1Agq0n4GInmLKkYxezPlJbu8khgSL9-MvkbC1ZxTMKQaoYcoyUDx3NIcm6c4Zew1fvq-kmHioTyBo1QcfwShX9GHA56gMgKQYrc-2Ym7H4-UwM4Z2FA2hMJUUeOZTdWoPehkJrs99QQJu55DnQWA0FNOU9nBKDuiTQp-VTj8qNjVXbRMi7Ul85OFAso1_NWFENkbmU9h_9_LYBAIcch5OLC3ySN9vXvQadU7s5atbsRF00R9BGgi-46NfxEfrtw8krhw';


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
  await expect(settingsBtn).toBeVisible();
  await expect(settingsBtn).toBeEnabled();
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

const OptionDate =  page.getByRole('option', { name: 'Choose Thursday, February 5th,' });
await expect(OptionDate).toBeVisible();
await expect(OptionDate).toBeEnabled();
await OptionDate.click();

await page.waitForTimeout(4000);

const OptionHour = page.getByRole('option', { name: '11', exact: true });
await OptionHour.scrollIntoViewIfNeeded();
await expect(OptionHour).toBeVisible();
await expect(OptionHour).toBeEnabled();
await OptionHour.click();

await page.waitForTimeout(10000);

const selectedDate = page.locator(datePickerCalendarContainer());
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
await page.waitForTimeout(7000);  
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


