import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, micMenuButton, firstnameInput, inviteOverlay, inputWhatsaap,selectMode,inputExpiration, inviteButton, successInvitationMessage, inputFirstName, inputLastName, selectSendType, inputMail, HotkeySlot, presetButton, presetNameInput, saveHotkeyButton, presetItem,OptionButton, saveChangesButton}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjgxM2Q1YWRhLWVkMzAtNDMzNC05NTU0LTEzOGYxNGQ0MWExZiJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NCwibWljRmFkZXJMYWJlbCI6IkFMVEVSTkFURSIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVotREUtRlJBIiwibmV0d29ya0NvZGUiOiJCV0UiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInJlb3JkZXJGYWRlciI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsIm5ldHdvcmtNb2RlIjpmYWxzZSwiYWx0ZXJuYXRlVmlldyI6dHJ1ZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJheWVybndlbGxlIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2J3ZS5zdmciLCJyYWRpb0NvZGUiOiJGUkIiLCJjaGFubmVsSWQiOiI1NjMiLCJuZXR3b3JrSWQiOiI2MCIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiRlJCIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiI4ZmRjZmI4Yi1kOWE0LTQ3NTctOGMxMS0zNmMxMmM0NjBlNDEiLCJpYXQiOjE3NzIwNzE1NjcsImV4cCI6MTgyMzkxMTU2N30.fG6X4dFZwwEYkyogzNWpxz6T5ZAromzjMqDQL2sp35e-4asad1CD4tSMnPeKVJRfxMNRbyqOnrBYyobjR4P-MSb5eItsJTI5iaiNsN8PCi9olBxYagjk9ruEyyD_Ojes6ycTrqFmORGGYMHKVEA9ui0psLbPdyo9UPflru9McTBfkboUxAE-cQpLec0wnfrHQg-J8R1FxwhwM5V-_neaQ11L84eVEzSK3i3fJXz2X9KZMsqHKjtiyw0JT0zrPxRcG6OjoE_p-qH2kj_TMIFHNny_Zt4OMS12Xm6zXNzsct2WpzYQjFPk20PlEC44cbeY9phfLU-aRd_iN9YssGR1UJmrOCfbON60xHOkV9CapRrNnOuXBsLMxyDAD_s7jBVUcmeziNCC9I67i_H-zVJagl8HPJQfrZDWvOvWugT-JT4vRcB73SLrj8FC77SIKLGQJ22wgqko1_yZOApHsMquAB4vs2YKIO9d7dAx3NHnatbXu5thrMkwiFVvT-mxAzFYDq6FpH0w4OGXiOerq1HiIGw4iBeyx2VXqQJdzi4JFFm88NRXcApbqhsgD8OeoOmb8hx2Wr5QwYutq0i2SAZObAVSGWGEuTrTl4PoTLa8G18npRO3zfOlKYMzwQ5sIKEdHhBf1uPpqfdL5D-Y7MrvAf19peNwp4YZ3LFmx-5NKFo';

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


// await page.waitForTimeout(6000);


// const scrollContainer = page.locator(datePickerCalendarContainer());
// await expect(scrollContainer).toBeVisible();
// await expect (scrollContainer).toBeEnabled();
// await scrollContainer.click();

// await page.waitForTimeout(6000);

// const OptionDate =  page.getByRole('option', { name: 'Choose Wednesday, February 25th,' });
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
// .toHaveText('Selected date: Wednesday, February 25th, 2026 at 5:00 PM');

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
 
await expect.soft (playerByrole2).toHaveClass('meter_wrap meter-boxes mic-active-red');
console.log('---------------------------player 2 started--------------------------');


await page.waitForTimeout(16000);

await expect.soft (playerByrole2).not.toHaveClass('meter_wrap meter-boxes mic-active-red');
console.log('----------------------------Player End----------------------');


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

await expect.soft (playerByrole).toContainClass('meter_wrap meter-boxes mic-active-red');
console.log('---------------------------player 2 started--------------------------');


await page.waitForTimeout(16000);

await expect.soft (playerByrole).not.toContainClass('header-red-playing');
console.log('----------------------------Player End----------------------');

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
await expect.soft (playerByrole3).toContainClass('meter_wrap meter-boxes mic-active-red');
console.log('---------------------------player 2 started--------------------------');


await page.waitForTimeout(16000);

await expect.soft (playerByrole3).not.toContainClass('header-red-playing');
console.log('----------------------------Player End----------------------');


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

await expect.soft (player1linkmode).toContainClass('meter_wrap meter-boxes mic-active-red');
console.log('---------------------------player 1 link mode started--------------------------');


await page.waitForTimeout(16000);

await expect.soft (player1linkmode).not.toContainClass('header-red-playing');
console.log('----------------------------Player End----------------------');

await page.waitForTimeout(420000);

});

test('Invite DJ', async ({ page }) =>  {

  //Invite Via Whatsaap//
  const inviteDJ1 = page.locator (micMenuButton('player5'));
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


//Check respone Save Setting
const responePromise = page.waitForResponse(res =>
  //URL endpoint API
  res.url().includes('https://ayhooq2j87.execute-api.eu-central-1.amazonaws.com/v1')&&
  res.request().method() === 'POST'
);

 await InviteButton.click();
const responeInviteButton = await responePromise;

expect (responeInviteButton.status()).toBe(200);

const body =await responeInviteButton.json();
expect(body).toBeTruthy();

//Invite Via Email//
const inviteDJ2 = page.locator(micMenuButton('player5'));
await expect.soft(inviteDJ2).toBeVisible();
  await expect.soft(inviteDJ2).toBeEnabled();
  await inviteDJ2.click();
  
  await firstName.click();
  await firstName.fill('AutoTest');

  
  await lastName.click();
  await lastName.fill('AutoTest');

 
  SendType.selectOption('Mail');
  await SendType.click();

  const inputemail = page.locator(inputMail());
  await expect(inputemail).toBeVisible();
  await expect(inputemail).toBeEnabled();
  await inputemail.click();
  await inputemail.fill('haikal@gmail.com');
  
  await page.waitForTimeout(6000);

    await modeDJ.selectOption('Mic Only');
  await modeDJ.click();

  await ExpirationDJ.click();
  await ExpirationDJ.fill('120');

  await page.waitForTimeout(6000);

//Check respone Save Setting
const responePromise2 = page.waitForResponse(res =>
  //URL endpoint API
  res.url().includes('https://ayhooq2j87.execute-api.eu-central-1.amazonaws.com/v1')&&
  res.request().method() === 'POST'
);

 await InviteButton.click();
const responeInviteButton2 = await responePromise2;

expect (responeInviteButton2.status()).toBe(200);

await responeInviteButton2.json();
expect(body).toBeTruthy();

});

test('Preset', async ({ page }) =>  {

  // const Contenthotkey = page.locator(playlistItemByIndex()).nth(3);
  // await expect.soft (Contenthotkey).toBeVisible();
  // await expect.soft (Contenthotkey).toBeEnabled();

  // const hotkeySlot = page.locator(HotkeySlot(2));
  // await expect.soft (hotkeySlot).toBeVisible();
  // await expect.soft (hotkeySlot).toBeEnabled();

  // await Contenthotkey.dragTo (hotkeySlot);

  // await page.waitForTimeout(7000);

  // const presetbutton = presetButton(page);
  // await expect.soft(presetbutton).toBeVisible();
  // await presetbutton.click();

  // await page.waitForTimeout(7000);

  // const presetname = presetNameInput(page);
  // await expect.soft (presetname).toBeVisible();
  // await expect.soft (presetname).toBeEnabled();
  // await presetname.click();
  // await presetname.fill('preset hotkey auto2');

  // const savepresethotkey = saveHotkeyButton(page);
  // await expect.soft (savepresethotkey).toBeVisible();
  // await expect.soft (savepresethotkey).toBeEnabled();
  // await savepresethotkey.click();

  // await page.waitForTimeout(7000);
  // await presetbutton.click();

  // const Filepreset = page.locator('div').filter({ hasText: /^preset hotkey auto2$/ }).first();
  // await Filepreset.scrollIntoViewIfNeeded();
  // await expect.soft(Filepreset).toBeVisible();
  // await expect.soft (Filepreset).toBeEnabled();
  // await Filepreset.click();


  // === 1. Drag content to hotkey slot ===
  const content1 = page.locator(playlistItemByIndex()).nth(3);
  const content2 = page.locator(playlistItemByIndex()).nth(4);
  const hotkeySlot = page.locator(HotkeySlot(2));
  const hotkeySlot2 = page.locator(HotkeySlot(5));

  await expect.soft(content1).toBeVisible();
  await expect.soft(content1).toBeEnabled();
  
  await expect.soft(hotkeySlot).toBeVisible();
  await expect.soft(hotkeySlot).toBeEnabled();

  await content1.dragTo(hotkeySlot);

  // === 2. Click preset button ===
  const presetBtn = presetButton(page);
  await expect.soft(presetBtn).toBeVisible();
  await presetBtn.click();

  // === 3. Input file name ===
  const presetInput = presetNameInput(page);
  await expect(presetInput).toBeVisible();
  await presetInput.fill('preset automation');

  // === 4. Click save button ===
  const saveBtn = saveHotkeyButton(page);
  await expect(saveBtn).toBeEnabled();
  await saveBtn.click();

  await page.waitForTimeout(7000);

  // === 5. Click preset button again ===
  await expect(presetBtn).toBeVisible();
  await presetBtn.click();

  await page.waitForTimeout(7000);


  // === 6. Click newly saved file ===
  const savedPreset = page.locator('div').filter({ hasText: /^preset automation$/ }).first();
  await expect(savedPreset).toBeVisible();
  await savedPreset.scrollIntoViewIfNeeded();
  await savedPreset.click();

  await page.waitForTimeout(7000);

  // === 7. Drag content again to hotkey slot ===
  await expect(content2).toBeVisible();
  await expect(content2).toBeEnabled();

  await expect.soft(hotkeySlot2).toBeVisible();
  await expect.soft(hotkeySlot2).toBeEnabled();

  await content2.dragTo(hotkeySlot2);
  await page.waitForTimeout(7000);

  // === 8. Click option button ===
  const optionbutton = OptionButton(page);
  await expect (optionbutton).toBeEnabled();
  await optionbutton.click();

  // === 9. Click save change ===
  const saveChangeBtn = saveChangesButton(page); 
  await expect (saveChangeBtn).toBeVisible();
  await expect(saveChangeBtn).toBeEnabled();
  
  //URL endpoint API
const responePromise = page.waitForResponse(res =>
  res.url().includes('execute-api.eu-central-1.amazonaws.com/v1/updateHotkeyPreset')&&
  res.request().method() === 'POST'
);

  await saveChangeBtn.click();
const responechangepreset = await responePromise;

expect (responechangepreset.status()).toBe(200);

const body =await responechangepreset.json();
expect(body).toBeTruthy();



});




