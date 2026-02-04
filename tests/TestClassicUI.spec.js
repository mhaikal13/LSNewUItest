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

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjM1MTAxOGFiLTg5NzgtNDZlMS05ODA4LWQyZWNhNjJjZTM4OCJ9.eyJ1c2VyTGl2ZUlkIjoiYjMzNGIyOWUtNmMwZi00ZTNhLWEzNDEtMWJjMDQ4MDAwY2JlIiwicm9vbUlEIjoiRlJCLUIxLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3IjpmYWxzZSwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJheWVybndlbGxlIiwicmFkaW9JbWFnZSI6Imh0dHBzOi8vZGIxcXU2c3d5cWY2eC5jbG91ZGZyb250Lm5ldC9hZmZpbGlhdGVzL2J3ZS5zdmciLCJyYWRpb0NvZGUiOiJGUkIiLCJjaGFubmVsSWQiOiI1NjMiLCJuZXR3b3JrSWQiOiI2MCIsImZvcm1hdElkIjoiMSJ9XSwibG9jYWxDb2RlIjoiRlJCIiwiaXNfc2hpZnRfY2hlY2siOmZhbHNlLCJqdGkiOiJmNjk3NGI4NC1iZTc0LTQxZDEtOWRkOS01NDk1MGNiODEwMjMiLCJpYXQiOjE3NzAxODc2MDUsImV4cCI6MTgyMjAyNzYwNX0.HspHp-u3yGdFEQtV6MpbejHwvu5IzxXdPembeewW38aurdnfL_NuFA-C9D2iJu_9JCLlRPc6PqW2Dzd-a_925qUq8vT8QdOe1GzvNbJ4ueDxFvEQs5seIgNgldq9LmoYPIk_RB09-yWqZ36SAHO8ntLn0dAxoCaAZ913-fU8_oQHTKa926I0xgx8AoV1UXhIsUiiJtS-4gqgkHzmwBC3W4f1WRx0q2WNPeTVIQeuJ3W-pK4al-v-wyLIEYgXe4bBFczXwJgSso6n_TanndVJ0WVZyIhqg_YJCo8sW6oBPjxafkNZd64W6AJpfBH4csvaIOkuoLC0Cc7-H4jcxvHIa5d8kbjl3UE0vxt_SFqWSwHFUdTtycxCFUmuvn8-jY-UeZYXYnBCbIbNssBegqwJnqcgiMaft0OyVv5KMziBk1sHDwX78XrHg7fg6PfiXnCCzOEeQH3__WceFHyW3Lx9Yp0Ajw4IcwP3j9MI4Pc5yL9KTJSjJ5-U8X6f-iO_1c-R2dsv2_kH3ENXWwtFwD0TsiVGyT3pCoKi4KmjgWdpDTti95tpetEy313SPVZ12eE0GpKM9DOKduC697ebYGcFs9szs6PxMeheb3saHUNg_95GvNd-n8jDZ-RiH4xxyD0aNghwAzAEL_kFPFT2zIwRS7Sn8r37MsbONJrsX1heoT0';


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

  await page.waitForTimeout(5000);

const Content1Linkmode = page.locator(playlistItemByIndex()).nth(12);
await Content1Linkmode.scrollIntoViewIfNeeded();
await expect(Content1Linkmode).toBeVisible();
await expect(Content1Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode1 = page.locator(playlistItemLinkModeIcon()).nth(12);
await expect(Linkmode1).toBeVisible();
await expect(Linkmode1).toBeEnabled();
await Linkmode1.click();
console.log('Clicked on Linkmode icon of Content1Linkmode');
await page.waitForTimeout(5000);

const Content2Linkmode = page.locator(playlistItemByIndex()).nth(13);
await Content2Linkmode.scrollIntoViewIfNeeded();
await expect(Content2Linkmode).toBeVisible();
await expect(Content2Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode2 = page.locator(playlistItemLinkModeIcon()).nth(13);
await expect(Linkmode2).toBeVisible();
await expect(Linkmode2).toBeEnabled();
await Linkmode2.click();
console.log('Clicked on Linkmode icon of Content2Linkmode');
await page.waitForTimeout(5000);

const Content3Linkmode = page.locator(playlistItemByIndex()).nth(14);
await Content3Linkmode.scrollIntoViewIfNeeded();
await expect(Content3Linkmode).toBeVisible();
await expect(Content3Linkmode).toBeEnabled({ timeout: 10000 }); 

const Linkmode3 = page.locator(playlistItemLinkModeIcon()).nth(14);
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


