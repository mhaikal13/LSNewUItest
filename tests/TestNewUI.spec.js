import { test, expect } from '@playwright/test';
import  {playerSongTitles, 
  datePickerCalendarContainer, 
  settingsDialog, 
  ButtonOK, 
  playlistItemLinkModeIcon  , 
  playerByRole, 
  playlistItemByIndex, 
  settingsButton, 
  settingsSaveButton}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjIyY2IxMmE4LTNlZmQtNGI4ZS05OGE5LWEyNjMwNjExNjc0MiJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NSwibWljRmFkZXJMYWJlbCI6ImhhaWthbDIiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjgyMTE5NjUzLTgyZTMtNDg3YS05MDI4LTI0ZmFiNmE0NGFlZCIsImlhdCI6MTc3MDI2NjE4OCwiZXhwIjoxODIyMTA2MTg4fQ.WDI77pIBvJh-uWewKnflNPKAQQi-7ccZnVs6ShUPJ4hM_z4gIBVnfXX5i-uDtCbZZ0WtN2h5dqeED1QYfWMbIISiEy-jEAjoaLAL8yD8VKUd452JmwxMfCRx4Lfnp6jGrToDbE_fpylp9bJKFrJXfnw2dQ-CxPhuEoRODFlahB5UQ80GSG_fdcXFAJXJy9AVLA1FYhCkp0gT2T8ASs37KbNuiC86OCrMiZ2POnIBqpt_A-GBC0bqcmZPNElp90C6I9gQWwuThqhGIGXP-VfUr28clyWilBX84Rt2fNXIlBA3v2SeZqbWL8N4HOllARBBNjs8PyneO9YP6KLEnPKmNwdOyN4naRrOTNPBuIw9dQjAxSbHnshOVY56FByl3FmOC-XvRC0lpQuBYmenGtDnKPEuYBGF2rnt3afVdG4qr_yeEqPEYcry8qpWonVHqiOR1kuU2DyURAEjE80h9A_LTf95eDC3oS_1EsnndDfMEtALqPLaY6G5MqA0UVwxopLpNLW3AO9JIUwnrjCeeImXUrT-cQdvfQT12swTdSwXyNPcC8ngAGmEZOVqt5QvXPEInv4OViEAqLMDRGuUx_SFZkF52zpxKa0QeB3vw2z3Qly1YQHc750eN3jaI2u6PQXBNHdZoUM_WRu5hVueXhBIPMMdJ54TZxM7HR3hvu-bQHs';


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
  await page.close();


});

test('Link Mode Check', async ({ page }) =>  {

const Content1Linkmode = page.locator(playlistItemByIndex()).nth(2);
await Content1Linkmode.scrollIntoViewIfNeeded();
await expect(Content1Linkmode).toBeVisible();
await expect(Content1Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode1 = page.locator(playlistItemLinkModeIcon()).nth(2);
await expect(Linkmode1).toBeVisible();
await expect(Linkmode1).toBeEnabled();
await Linkmode1.click();
console.log('Clicked on Linkmode icon of Content1Linkmode');
await page.waitForTimeout(5000);

const Content2Linkmode = page.locator(playlistItemByIndex()).nth(3);
await Content2Linkmode.scrollIntoViewIfNeeded();
await expect(Content2Linkmode).toBeVisible();
await expect(Content2Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode2 = page.locator(playlistItemLinkModeIcon()).nth(3);
await expect(Linkmode2).toBeVisible();
await expect(Linkmode2).toBeEnabled();
await Linkmode2.click();
console.log('Clicked on Linkmode icon of Content2Linkmode');
await page.waitForTimeout(5000);

const Content3Linkmode = page.locator(playlistItemByIndex()).nth(4);
await Content3Linkmode.scrollIntoViewIfNeeded();
await expect(Content3Linkmode).toBeVisible();
await expect(Content3Linkmode).toBeEnabled({ timeout: 10000 });

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



  await page.close();

});


