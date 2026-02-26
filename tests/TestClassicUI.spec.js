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

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjkwNDk1NDhkLTNiODUtNDUzZC05ZDQ4LTYzNDMwY2I5YmM4MCJ9.eyJ1c2VyTGl2ZUlkIjoiZmI1NDZjNGUtZmQ4OS00MjY2LWFiODItMTBhMGRhYjAxNzU1Iiwicm9vbUlEIjoiTllYLUIxLUFXRS1SRUMiLCJjYW5LaWNrVXNlciI6dHJ1ZSwibWljRmFkZXJJZCI6NCwibWljRmFkZXJMYWJlbCI6IkhpbG1hbiIsImJpdFJhdGUiOjI1NjAwMCwibWljQWx3YXlzT24iOmZhbHNlLCJzZXJ2ZXJDb2RlIjoiQVotREUtRlJBIiwibmV0d29ya0NvZGUiOiJBV0UiLCJhbGxvd0ZhZGVyQ2hhbmdlIjp0cnVlLCJpc1NlcnZlciI6MCwiZWNob0NvbXBlbnNhdGlvbkVuYWJsZSI6ZmFsc2UsInJlb3JkZXJGYWRlciI6ZmFsc2UsInRpbWVab25lIjoiQW1lcmljYS9OZXdfWW9yayIsIm5ldHdvcmtNb2RlIjpmYWxzZSwic3RvcmFnZVByb3ZpZGVyIjoiQVdTIiwic3RvcmFnZUJhc2VEaXIiOiJvaGktczNiLWxzLWxpdmUtcmVjb3JkaW5nLWF1ZGlvL1JBVy9BV0UvTllYIiwicmVnaW9uIjoidXMtZWFzdC0yIiwiZmlsZU5hbWUiOiJBV0UtTllYLTIwMjYtMDEtMTQtMTAwNjMwLndlYm0iLCJjYWxsQmFja0xpbmsiOiJodHRwczovL2JyaWRnaW5nLnJhZGlvLmNsb3VkL2xpdmVfcmVjb3JkaW5nX2RvbmU_ZmlsZW5hbWU9QVdFLU5ZWC0yMDI2LTAxLTE0LTEwMDYzMC53ZWJtIiwicmVjb3JkTGFiZWwiOiJWVCBBV0UgMTQtMDEiLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQVdTIFJDIEV4cG8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYXdlLnN2ZyIsInJhZGlvQ29kZSI6Ik5ZWCIsImNoYW5uZWxJZCI6IjQ2OCIsIm5ldHdvcmtJZCI6IjU1IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJOWVgiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjcxNzk4YTJiLWFkYjAtNGYwYi1iNzFmLWY3ZWNjYmQxZDNjNSIsImlhdCI6MTc3MTk4NzU4NCwiZXhwIjoxODIzODI3NTg0fQ.S5hRXNYMfjblm07D3M8zQU-AFKHn_-vVGXP1-iz2-XBcMwM9Bg8wQg_2UqR-lpEMs3kX2BaXRulCrt_jSWDzFAViFJPRv3nRzlUqy3Ah4AsmGaQlFuRyPt1RMtN9enMIPIx9kcJ4K0_DOSSrXV4NoqpIvx063lIQ70_aD3QdlUb7uOa34ZX455HYnLFjZexPRVjmMK5OQLoZAT3qiBihsgvPKaKYqoYnaA6kjWHUHkXPXHV_qFTQeT35yv0QsvvjGineirSWtsnU6CnfibShiPljLRycYq7sLHMsv5D9mdgrJBjNUn3_fYFw_u85D2bK7ok-AVj4FQtTj8zPLJMUn0cec_XG8oxa_uscJpaP0cWF217j16km66WR-W3tkQglTu1ZXSJyWmh27u9NdMSAOeT3X3e_yMDF8Ibhb4iQmPD10B2o7D5lvuX7M2yD08WzxG_Lg5mam3Vet69lg9hYcWb_mPRS7qfsD_l7yYbbbAiJXARJADT-n347eiWvRGTduS98JXQszZL7NcA7IlQanu1k57nDgOFKyn9t-Xo87w5mQcd9-cBirxAvoX3UIZ7NkWOYxGARLtChjlyHZgc1ydCnw8beooYfgVEMTUdT9GqstelU-8lzE8QPVb0y-CDcN-n_9TgiVhgCFmb3CzovREVw7aPCvP_bqzGJBzKEWq8';


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



// const scrollContainer = page.locator(datePickerCalendarContainer());
// await expect(scrollContainer).toBeVisible();
// await expect (scrollContainer).toBeEnabled();
// await scrollContainer.click();

// await page.waitForTimeout(6000);

// const OptionDate =  page.getByRole('option', { name: 'Choose Tuesday, February 10th,' });
// await expect(OptionDate).toBeVisible();
// await expect(OptionDate).toBeEnabled();
// await OptionDate.click();

// await page.waitForTimeout(4000);

// const OptionHour = page.getByRole('option', { name: '13', exact: true });
// await OptionHour.scrollIntoViewIfNeeded();
// await expect(OptionHour).toBeVisible();
// await expect(OptionHour).toBeEnabled();
// await OptionHour.click();

// await page.waitForTimeout(10000);

// const selectedDate = page.locator(datePickerCalendarContainer());
// await expect.soft(selectedDate)
// .toHaveText('Selected date: Tuesday, February 10th, 2026 at 1:00 PM');



});


test('LiveStudio CHECK PLAYER', async ({ page }) =>  {

// const contentPlayer2 = page.locator(playlistItemByIndex()).nth(7);
// await contentPlayer2.scrollIntoViewIfNeeded();
// await expect(contentPlayer2).toBeVisible();
// await expect(contentPlayer2).toBeEnabled();


// const playerByrole2 = page.locator(playerByRole('player2'));
// await expect(playerByrole2).toBeVisible();
// await expect(playerByrole2).toBeEnabled({ timeout: 10000 });

// await contentPlayer2.dragTo(playerByrole2); 

// await page.mouse.up();

// await page.waitForTimeout(7000);  
// // Ensure page has focus before pressing keyboard
// await playerByrole2.click();
// await page.waitForTimeout(1000);
// // Press key 2
//   const player2button= page.locator(playerOffButton('2'));
// await expect(player2button).toBeVisible();
// await expect(player2button).toBeEnabled();
// await player2button.click();

 
// console.log('---------------------------player 2 started--------------------------');


// await page.waitForTimeout(16000);

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

await page.waitForTimeout(420000);


// const contentPlayer3 = page.locator(playlistItemByIndex()).nth(6);
// await contentPlayer3.scrollIntoViewIfNeeded();
// await expect(contentPlayer3).toBeVisible();
// await expect(contentPlayer3).toBeEnabled({ timeout: 10000 });

// const playerByrole3 = page.locator(playerByRole('player3'));
// await expect(playerByrole3).toBeVisible();
// await expect(playerByrole3).toBeEnabled({ timeout: 10000 });

// await contentPlayer3.dragTo(playerByrole3); 
// await page.mouse.up();

// console.log('Drag and Drop Content to Player3'); 
// await page.waitForTimeout(7000);
// const player3button= page.locator(playerOffButton('3'));
// await expect(player3button).toBeVisible();
// await expect(player3button).toBeEnabled();
// await player3button.click();

// console.log('---------------------------player 3 started--------------------------');

// await page.waitForTimeout(16000);
//   await page.close();


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


