import { test, expect } from '@playwright/test';
import  { datePickerCalendarContainer, settingsDialog, ButtonOK, playlistItemLinkModeIcon  ,playerTitleText, timerInPlayer, playerByRole, playlistItemByIndex, settingsButton, settingsSaveButton, playerElapsedTime}  from './selectors.js';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjAzMjUyNGQzLWNkNzQtNDRjYi04M2RhLWYwMjIyMGU3NjYxYSJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiQlJNLU0xLUJSWCIsImNhbktpY2tVc2VyIjp0cnVlLCJtaWNGYWRlcklkIjoiNSIsIm1pY0ZhZGVyTGFiZWwiOiJSQyBURVNUIiwiYml0UmF0ZSI6MjU2MDAwLCJtaWNBbHdheXNPbiI6ZmFsc2UsInNlcnZlckNvZGUiOiJBV1MtU0ctU1RBR0lORyIsIm5ldHdvcmtDb2RlIjoiQlJYIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQnJpbGx1eCBSYWRpbyIsInJhZGlvSW1hZ2UiOiJodHRwczovL2RiMXF1NnN3eXFmNnguY2xvdWRmcm9udC5uZXQvYWZmaWxpYXRlcy9icmlsbHV4LXJhZGlvLnBuZyIsInJhZGlvQ29kZSI6IkJSTSIsImNoYW5uZWxJZCI6IjE1OTMiLCJuZXR3b3JrSWQiOiIxMTQiLCJmb3JtYXRJZCI6IjEifV0sImxvY2FsQ29kZSI6IkJSTSIsImlzX3NoaWZ0X2NoZWNrIjpmYWxzZSwianRpIjoiMDkwOWRiM2EtYjYzZS00NTRhLThiNzMtNjA4NDJmNTY1MjdlIiwiaWF0IjoxNzcwNzc2NTM2LCJleHAiOjE4MjI2MTY1MzZ9.kBmtFLkU3vNh8846tSTP_AjoKOApBj9ehLmNRFAGOq0iWiuuFQ_8oxawRc8gos1ojy9T9iB1HEbEQT3o5DnkOwh1esBhbuhnC4E3Hgthjb9CLwVRgrnld6T-zn0aDT_oJu24_kpCDUjZz_LQE-V7oZ2A-ZpqKeecfPJNGa8QOY0MMdMb0RkBKJRRWP59iFW7_eqCaYCLIkD5h33mUbBCwC71i-YNtltbMBmVSLTWpSWEIuxudJUcAcrB8YtEsavgK2hWFcY9uq7vQ7YClxxc48Y6TnXI3iwKKqJOHVm-zZPX4o9H-qLctj9ZzTUOM7X5p_trbs2S0U4LIF-kJVv1hjbQstYrEgSlxII-HrdUrgQ8dAGkwOS_5UvKEZaePKW--24A-7URFtdg3fiG78yiN1M3B-ECYm-3JT8BZqUeEnVolicc4f8AqA7w_vm9L-nrAiSpoONdZOPTBwZFvcVzCGwqeq0s9l4-9BgUxZhwiMuR6dOp8PqYqWNg2XI5e94N2hMYK4UweLjDOdkkbNq8zKZ68iDbHOQzl6rMkxCC361ZJ15g1Y8SEy4sTYpuyxXCbKNR9_czO9wnDKnLnxltTnhb9PtXTZRWfsbTM9hP4zVSVl-3CrR67mlHXbvCpssXyEokhVWZemHoRnJ7NHveCa1kRWSxCBhzFGjHTEJLzNY';

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

const Content1Linkmode = page.locator(playlistItemByIndex()).nth(6);
await Content1Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content1Linkmode).toBeVisible();
await expect.soft(Content1Linkmode).toBeEnabled(); 

const Linkmode1 = page.locator(playlistItemLinkModeIcon()).nth(6);
await expect(Linkmode1).toBeVisible();
await expect(Linkmode1).toBeEnabled();
await Linkmode1.click();
console.log('Clicked on Linkmode icon of Content1Linkmode');
await page.waitForTimeout(5000);

const Content2Linkmode = page.locator(playlistItemByIndex()).nth(7);
await Content2Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content2Linkmode).toBeVisible();
await expect.soft(Content2Linkmode).toBeEnabled(); 

const Linkmode2 = page.locator(playlistItemLinkModeIcon()).nth(7);
await expect(Linkmode2).toBeVisible();
await expect(Linkmode2).toBeEnabled();
await Linkmode2.click();
console.log('Clicked on Linkmode icon of Content2Linkmode');
await page.waitForTimeout(5000);

const Content3Linkmode = page.locator(playlistItemByIndex()).nth(8);
await Content3Linkmode.scrollIntoViewIfNeeded();
await expect.soft(Content3Linkmode).toBeVisible();
await expect.soft(Content3Linkmode).toBeEnabled();

const Linkmode3 = page.locator(playlistItemLinkModeIcon()).nth(8);
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


