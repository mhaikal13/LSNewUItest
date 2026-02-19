import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, micMenuButton, firstnameInput, inviteOverlay, inputWhatsaap,selectMode,inputExpiration, inviteButton, successInvitationMessage, inputFirstName, inputLastName, selectSendType}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6ImFkMjU2OWRlLTVhYWQtNGU0Ny05MTJmLTg5ZjYzNTRmMzI0YyJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NywibWljRmFkZXJMYWJlbCI6ImFsdGVybmF0ZSIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLUlELUpLVCIsIm5ldHdvcmtDb2RlIjoiQldFIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJuZXR3b3JrTW9kZSI6ZmFsc2UsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCYXllcm53ZWxsZSIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9id2Uuc3ZnIiwicmFkaW9Db2RlIjoiRlJCIiwiY2hhbm5lbElkIjoiNTYzIiwibmV0d29ya0lkIjoiNjAiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkZSQiIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiZDA2NTRjMjctNmY3Ni00OGNmLTlmMDktMzdmY2NiZWVmNjEzIiwiaWF0IjoxNzcxNDc0NTAwLCJleHAiOjE4MjMzMTQ1MDB9.NwTeN5fDLKaGVR46YC_eeHrHg0e22SZbPNLGceifkh3U8XxJqUPKbNrU2L0RRHTKUyu07opdqNLI0pqL8YgzWWYtGjPwMp4trdMPLI2vqEFXR5Qz9S9T9YylQB0x7DViNw4pWEloqRmPLaprFh5AFavhvGCqqPxawbayyHqRTsbPdcSbZc1jUYfp6hJoalzs_crHNAFGBOyDMYHWcITY6Jt66fObxPQMrMRYxServapPHW3hPL4xj631xp7ZqA8Z5AkE8mBIrGmcclwsA7XW2y_95Vzhoeo__fUWiMNK61HMX-YWa-tSZY1vFJkTW-q9bk_9KbhFQTt6LkZ92niFx2PYXDOdoI9gzanTkqgxrOEB_AyJO3VwnFwsCPx0HJA95ufA4vFy92KJFqU4gNGLSPmwZvWKf6jyJwfBgaSTTFoB7Q404DHTx9pei5Em1R7XMuEkZmNhToodddWHXDi2OLluCucCST-VQYfisraqvmmof7mgVlvMDfcswSm-MJQ7xE0uDL2cmBv_aud7XmPz2Q7s68v3wJnUYS0IaTdJnKDZ8nVNRVr-TpnSs-W_bZRgFzt6dp5tsonwPgxdSvIzA77nUUOCJ5-eLGJSs8m96UN6ebWc6YkGLDEOYArcYgds5bra3LL1s1sObvbWJ7V-vDHOO7Fw7EaavbrCohxu_lA';

test.beforeEach(async ({ page }) => {

    await page.goto(URL);

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
await AudioReplaceMode.selectOption('b');
await expect(AudioReplaceMode).toHaveValue('b');

const DisableKeyboardShortcuts = page.locator('.react-switch-bg').first();
await expect(DisableKeyboardShortcuts).toBeVisible();
await expect(DisableKeyboardShortcuts).toBeEnabled();
await DisableKeyboardShortcuts.click();

const Save = page.locator(settingsSaveButton());
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();

//Check respone Save Setting
const responePromise = page.waitForResponse(res =>
  //URL endpoint API
  res.url().includes('execute-api.eu-central-1.amazonaws.com/v1/saveDevicesSettings')&&
  res.request().method() === 'POST'
);

await Save.click(); 
const responeSavingSetting = await responePromise;

expect (responeSavingSetting.status()).toBe(200);

const body =await responeSavingSetting.json();
expect(body).toBeTruthy();

await page.waitForTimeout(6000);
  await page.keyboard.press('Escape');
  
const Setting = page.locator(settingsDialog());
await expect.soft(Setting).not.toBeVisible();


await page.waitForTimeout(6000);


// const scrollContainer = page.locator(datePickerCalendarContainer());
// await expect(scrollContainer).toBeVisible();
// await expect (scrollContainer).toBeEnabled();
// await scrollContainer.click();

// await page.waitForTimeout(6000);

// const OptionDate =  page.getByRole('option', { name: 'Choose Wednesday, February 11th,' });
// await expect(OptionDate).toBeVisible();
// await expect(OptionDate).toBeEnabled();
// await OptionDate.click();

// await page.waitForTimeout(4000);

// const scrollContainer2 = page.locator(datePickerCalendarContainer());
// await expect(scrollContainer2).toBeVisible();
// await expect (scrollContainer2).toBeEnabled();
// await scrollContainer2.click();

// await page.waitForTimeout(6000);

// const OptionHour = page.getByRole('option', { name: '05', exact: true });
// await expect(OptionHour).toBeVisible();
// await expect(OptionHour).toBeEnabled();
// await OptionHour.click();

// await page.waitForTimeout(10000);

// const selectedDate = page.locator(datePickerCalendarContainer());
// await expect (selectedDate).toBeVisible();
// await expect.soft(selectedDate)
// .toHaveText('Selected date: Wednesday, February 11th, 2026 at 5:00 PM');

await page.waitForTimeout(10000);


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
await page.waitForTimeout(10000);
await player1linkmode.click();
await page.keyboard.press('1');
console.log('---------------------------player 1 link mode started--------------------------');


await page.waitForTimeout(420000);

});

test('Invite DJ', async ({ page }) =>  {

  const inviteDJ1 = page.locator (micMenuButton('player4'));
  await expect.soft(inviteDJ1).toBeVisible();
  await expect.soft(inviteDJ1).toBeEnabled();
  await inviteDJ1.click();

  const overlayInviteDJ = page.locator(inviteOverlay());
  await expect.soft(overlayInviteDJ).toBeVisible();
  await expect.soft(overlayInviteDJ).toBeEnabled();

  const firstName = page.locator(inputFirstName());
  await expect(firstName).toBeVisible();
  await expect(firstName).toBeEnabled();
  await firstName.click();
  await firstName.fill('AutoTest');

  const lastName = page.locator(inputLastName());
  await expect(lastName).toBeVisible();
  await expect(lastName).toBeEnabled();
  await lastName.click();
  await lastName.fill('AutoTest');

  const SendType = page.locator(selectSendType());
  await expect(SendType).toBeVisible();
  await expect(SendType).toBeEnabled();
  SendType.selectOption('wa');
  await SendType.click();

  const Inputnumber = page.locator(inputWhatsaap());
  await expect(Inputnumber).toBeVisible();
  await expect(Inputnumber).toBeEnabled();
  await Inputnumber.click();
  await Inputnumber.fill('+49851563422');
  
  await page.waitForTimeout(6000);

  const modeDJ = page.locator(selectMode());
  await expect(modeDJ).toBeVisible();
  await expect(modeDJ).toBeEnabled();
    await modeDJ.selectOption('Contributor');
  await modeDJ.click();

  const ExpirationDJ = page.locator(inputExpiration());
  await expect(ExpirationDJ).toBeVisible();
  await expect(ExpirationDJ).toBeEnabled();
  await ExpirationDJ.click();
  await ExpirationDJ.fill('120');

  await page.waitForTimeout(6000);

  const InviteButton = page.locator(inviteButton());
  await expect(InviteButton).toBeVisible();
  await expect(InviteButton).toBeEnabled();

  const [response] = await Promise.all([
  page.waitForResponse(res =>
    //URL endpoint API 
    res.url().includes('execute-api.eu-central-1.amazonaws.com/v1') &&
    res.request().method() === 'POST'
  ),
  InviteButton.click()
]);

// cek status dari response
expect(response.status()).toBe(200);

// ambil body setelah itu
const responseBody = await response.json();
// validasi body
expect(responseBody).toBeTruthy();
console.log(responseBody);
  console.log('Invite DJ sent successfully');

});




