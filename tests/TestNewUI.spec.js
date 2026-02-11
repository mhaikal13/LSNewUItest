import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, InviteDJButton, firstnameInput, OverlayInviteDJ}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjNmYWQ1NzVlLWQzNDItNDMyNS1hMWNiLWJlOTcxN2NkMjRlNCJ9.eyJyb29tSUQiOiJCUk0tQjEtQlJYIiwiY2FuS2lja1VzZXIiOmZhbHNlLCJtaWNGYWRlcklkIjo2LCJtaWNGYWRlckxhYmVsIjoiUkIiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1TRy1TVEFHSU5HIiwibmV0d29ya0NvZGUiOiJCUlgiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsImFsdGVybmF0ZVZpZXciOnRydWUsImNvbm5lY3RCcmlkZ2UiOmZhbHNlLCJyYWRpb0luZm9ybWF0aW9uIjpbeyJyYWRpb05hbWUiOiJCcmlsbHV4IFJhZGlvIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2JyaWxsdXgtcmFkaW8ucG5nIiwicmFkaW9Db2RlIjoiQlJNIiwiY2hhbm5lbElkIjoiMTU5MyIsIm5ldHdvcmtJZCI6IjExNCIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiQlJNIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiIzOTRhZDliMi1lMGQ1LTQyNTQtOGM1YS03MTg3MDNlY2E2NDUiLCJpYXQiOjE3NTg1MzAzNDEsImV4cCI6MTgxMDM3MDM0MX0.mronKsJi0qo3Ua2_c_eMDQkJZFialOiUhcRiLjd509HD9PpNkV9xA8sdPIAYApxpihwqpFON_SGEEqrt7zfFAXSrdcLOQn7cajq5rQ7r-tKf9cqyaJ3OB56t_V_vquLGAH5xVmWv2VMWgCVRq99aEYnh-XW1B_dnXy2it-q8KDf9Ydmv14eWFCeJhzFAK-ki1FimpYQjL2pqOYHW4GSw9ecI28JkZPpgEUPeEAIj5FzVB9BomnaQ_frFJokSKgOsER_PvJh-V8EmkfyMttTHbzSa9vR4RVlZgn6z1SHcxzx681jZl61yEtZjsfmWf7JPJVo2Mea8PRaM8WxC7fjra6Uqb9ZcYjedy2u95ZxOlgVgvSw1fzzFJUlnzQmT63oXMrDUZNKCv5_QXNW8vZ5p2rnhGQGAtavTNHhNlbNuGCzd0rSh5kcDkbzQpUK4vO3AbLCPR0qMC5ohQT28LtW9N8agHe3S2IkMc-rFBuk16_XESiwziIRnXs0_ArbHayUcew73xYo3ipBRIlfX6hepfiFpb9G01HyPAIxRxHM0zoH7gNwfnxiL7T1pDJPuB8nwyXx-l2qWg14_9KZZ5g00tUpid4rsG_4-D2MF7vzE61ZgmrAuyFL378Ft0h5ZrGqnbbd5YrkQMcpWtIWcPLYx1e_fBiYRPlaEfSEEdIeQ76g';

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
await expect.soft(Setting).not.toBeVisible();
await page.waitForTimeout(6000);

const Fullscreen = page.locator('.settings_container > div:nth-child(2)');
await expect(Fullscreen).toBeVisible();
await expect(Fullscreen).toBeEnabled();
await Fullscreen.click();

await page.waitForTimeout(6000);


const scrollContainer = page.locator(datePickerCalendarContainer());
await expect(scrollContainer).toBeVisible();
await expect (scrollContainer).toBeEnabled();
await scrollContainer.click();

await page.waitForTimeout(6000);

const OptionDate =  page.getByRole('option', { name: 'Choose Wednesday, February 11th,' });
await expect(OptionDate).toBeVisible();
await expect(OptionDate).toBeEnabled();
await OptionDate.click();

await page.waitForTimeout(4000);

const OptionHour = page.getByRole('option', { name: '05', exact: true });
await OptionHour.scrollIntoViewIfNeeded();
await expect(OptionHour).toBeVisible();
await expect(OptionHour).toBeEnabled();
await OptionHour.click();

await page.waitForTimeout(10000);

const selectedDate = page.locator(datePickerCalendarContainer());
await expect (selectedDate).toBeVisible();
await expect.soft(selectedDate)
.toHaveText('Selected date: Wednesday, February 11th, 2026 at 5:00 PM');

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

  const inviteDJ1 = page.getByRole('button').filter({ hasText: /^$/ }).nth(2);
  await expect.soft(inviteDJ1).toBeVisible();
  await expect(inviteDJ1).toBeEnabled();
  await inviteDJ1.click();

  const overlayInviteDJ = page.locator(OverlayInviteDJ());
  await expect.soft(overlayInviteDJ).toBeVisible();
  await expect.soft(overlayInviteDJ).toBeEnabled();

  const firstName = page.locator(firstnameInput());
  await expect(firstName).toBeVisible();
  await expect(firstName).toBeEnabled();
  await firstName.click();
  await firstName.fill('AutoTest');


  await page.waitForTimeout(3000);

});




