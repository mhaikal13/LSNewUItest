import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, micMenuButton, firstnameInput, inviteOverlay, inputWhatsaap,selectMode,inputExpiration, inviteSendButton, successInvitationMessage, inputFirstName, inputLastName, selectSendType}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6ImVkZTA2M2RkLTExOTgtNDgzMC1iYTAxLWI4YmFiMWVlMjEzNiJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLU0xLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IkhBSUtBTCIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVdTLUlELUpLVCIsIm5ldHdvcmtDb2RlIjoiQldFIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJuZXR3b3JrTW9kZSI6ZmFsc2UsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCYXllcm53ZWxsZSIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9id2Uuc3ZnIiwicmFkaW9Db2RlIjoiRlJCIiwiY2hhbm5lbElkIjoiNTYzIiwibmV0d29ya0lkIjoiNjAiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkZSQiIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiMjdjNTlmNjctNzQ4Ni00ZGRjLWFiZWQtNTY3NzQyYWY4YmZlIiwiaWF0IjoxNzcwODg0NTkxLCJleHAiOjE4MjI3MjQ1OTF9.rTMZrHtx5K4JloHYO-VZhPAlEVMzrPJHNp5GGzwfljDVERPXoB4WaPdcMwajgOTpqq9vpe_zXLLzttNhfSsNd449ECnwH4D2cXwMnGavOLNa8JCKOFeOJNYgMJGObQaFr4AgMTcHRXZfSotEv-Oa3bW_3wUEkUGdvJr0P2TdTfelg6UbXR7-cYqIS7m-bBlxlAUzsGD22ZfZgXwv6TQQKbkN9uwT6JxnsQeadFNRW8atrwX8Ywb4lNX-SgQykDbgvUcy3o74v2um0NEKc93QJNsCQHvjp8tshYDSDklWZXm-A4tFQ2v1xIlsz1xbnHoIqSSM8aHwva8HGRXzYbNa-8setCvWvrDEVZmKMjZxY6KNB8bCFXtr5kGSBEqzmSHaDLFLNAGTOzav5_E7enHR0HwAuTyzwQcqfHE202CT1VJWnRIsg6NthLEOAeL06AdQWaAL4sdS38ywL6iiOlsVbPaQwRl3U9gGloDiFedVmUnZID3kxfFLmgr3zYDCMAVHjzGyGXtuzqMgPW1mqGH7xF9Nge9_FebJeJUhTFQpXzfgyQCwnn1CjZz7BcsyqyhmFXASKc3n3OpkSG__7MJ3ChBWQw_kK5jtblYMTmcFOBEG6oq1ldA6kH9S5eQj5zdCpKfOTGNRsFcUjksUcz2iGjKj0DsGVnNmm2nlNs1KbB4';

test.beforeEach(async ({ page }) => {

    await page.goto(URL);

  const okButton = page.locator(ButtonOK());
  await expect (okButton).toBeVisible({ timeout: 10000 });
  await expect(okButton).toBeEnabled();
  await okButton.click();


//   const settingsBtn = page.locator(settingsButton());
//   await expect.soft(settingsBtn).toBeVisible();
//   await expect.soft(settingsBtn).toBeEnabled();
//   await settingsBtn.click();

//   const overlaysetting = page.getByText('Audio Replace ModeTrueFalseDisable Keyboard ShortcutsBoost ModeEcho');
//   await expect(overlaysetting).toBeVisible();
//   await expect(overlaysetting).toBeEnabled();

// const AudioReplaceMode = page.getByRole('combobox').nth(3);
// await expect(AudioReplaceMode).toBeVisible();
// await expect(AudioReplaceMode).toBeEnabled();
// await AudioReplaceMode.click();
// await AudioReplaceMode.selectOption('a');
// await expect(AudioReplaceMode).toHaveValue('a');

// const DisableKeyboardShortcuts = page.locator('.react-switch-bg').first();
// await expect(DisableKeyboardShortcuts).toBeVisible();
// await expect(DisableKeyboardShortcuts).toBeEnabled();
// await DisableKeyboardShortcuts.click();

// const Save = page.locator(settingsSaveButton());
// await expect(Save).toBeVisible();
// await expect(Save).toBeEnabled();
// await Save.click();

// await page.waitForTimeout(6000);
//   await page.keyboard.press('Escape');
  
// const Setting = page.locator(settingsDialog());
// await expect.soft(Setting).not.toBeVisible();
// await page.waitForTimeout(6000);


// await page.waitForTimeout(6000);


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
await page.keyboard.press('Digit 1');
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

  const SendTypeInvite = page.locator(inputWhatsaap());
  await expect(SendTypeInvite).toBeVisible();
  await expect(SendTypeInvite).toBeEnabled();
  await SendTypeInvite.click();
  await SendTypeInvite.selectOption('wa');

  const Inputnumber = page.locator(inputWhatsaap());
  await expect(Inputnumber).toBeVisible();
  await expect(Inputnumber).toBeEnabled();
  await Inputnumber.click();
  await Inputnumber.fill('+49851563422');

  const SendType = page.locator(selectSendType());
  await expect(SendType).toBeVisible();
  await expect(SendType).toBeEnabled();
  await SendType.click();

  const modeDJ = page.locator(selectMode());
  await expect(modeDJ).toBeVisible();
  await expect(modeDJ).toBeEnabled();
  await modeDJ.click();
  await modeDJ.selectOption('Mic Only');

  const ExpirationDJ = page.locator(inputExpiration());
  await expect(ExpirationDJ).toBeVisible();
  await expect(ExpirationDJ).toBeEnabled();
  await ExpirationDJ.click();
  await ExpirationDJ.fill('120');

  const InviteButton = page.locator(inviteSendButton());
  await expect(InviteButton).toBeVisible();
  await expect(InviteButton).toBeEnabled();
  await InviteButton.click();

  const successMessage = page.locator(successInvitationMessage());
  await expect.soft(successMessage).toBeVisible();

  console.log('Invite DJ sent successfully');
  await page.waitForTimeout(3000);

});




