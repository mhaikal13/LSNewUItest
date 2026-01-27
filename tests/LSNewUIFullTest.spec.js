import { test, expect } from '@playwright/test';

const URL = 'https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6ImJmODgyY2M4LWY5YjItNDE5NC1hYjMyLWUyZjdhODM4NTFhMCJ9.eyJ1c2VyTGl2ZUlkIjoiNTlkNjRlN2YtZGUyMi00ODJmLTkwYjEtMjdkYjk2NjgxMzJjIiwicm9vbUlEIjoiRlJCLU0xLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6ImMyMzQwNjZiLTQ1YmUtNGY5Mi05YmI5LWRjYWUwMmUyOTU4ZiIsImlhdCI6MTc2OTQ5NDMwOCwiZXhwIjoxNzY5NTgwNzA4fQ.ECgTpVhguw9FjM6pS-G2LNcCdJj7EqJcGIGOwpALboNrRQOWHvV4vtNNuYP7fT4NQHo6WH7AIijYvmpANoUHfbTxgvxXW_D-yIWZsKDZz-aVv2Ek_0Z3mxTvAH8i_Z4QTDZVp_RPejuFyARLgsbNsfmzHUKj1_P2TT13Lj9Rj6hoH6wy2Q8OyzpRISzIH5Vu_i5V7uoOjovhnae9xm54IL_xj8olwhje8nCWJ5NLjEiAaEeVXpGBCeYlDf9T_2s4w5bv6KFpe231bdk_Mo5XtiR8RwozDQac5z2M26KeZ6C3YJVABIwb-AlJpJ9hskN97Uua14C9Vl6cMlS_m9CAKrxmdRu2pNfhBfgoSZvkcrzDyxulD3nNvEgoTCYkya4SUrPppW0uVGre8olDPQusz9PQw23g9whYhUUnh0UcPdE1cKJ56sQqa2X29BHEw0DFGYEoUb7QHzDrLZjYKEgR37qnO-0gUqwa9_DocKRB6XQa-a-Fx6oESCe-pGFZg95pTHFJDYnq_dC5toPAQRr_hhzyJPAhMyGRh3O19olXnkaqrnYkVzM5PibvsAKenk3g7G2m_7zmIwoPSIvvM0ArmoU8kRDr3RTw2dYnfn5xKZJTJ6q1mNFyo50wMqrxMW0JbwYBeB4g5Clc1x9lvLA93x7kJYeNl7ifcUjqGkM5jZY';

let pageCrashed = false;
let jsError = false;

test.beforeEach(async ({ page }) => {
     pageCrashed = false;
 jsError = false;

 page.on('crash', () => pageCrashed = true);
  page.on('pageerror', () => jsError = true);

    await page.goto(URL);

 const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();


const setting = page.locator('.settings-button').first();
await expect(setting).toBeVisible();
await expect(setting).toBeEnabled();
await setting.click();

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

const Save = page.getByRole('button', { name: 'Save Settings' });
await expect(Save).toBeVisible();
await expect(Save).toBeEnabled();
await Save.click();

await page.keyboard.press('Escape');

const scrollContainer = page.getByRole('dialog', { name: 'Choose Date and Time' });
await expect(scrollContainer).toBeVisible();
await expect (scrollContainer).toBeEnabled();


const OptionDate =  page.getByRole('option', { name: 'Choose Thursday, January 29th,' });
await expect(OptionDate).toBeVisible();
await expect(OptionDate).toBeEnabled();
await OptionDate.click();


const OptionHour = page.getByRole('option', { name: '10', exact: true });
await OptionHour.scrollIntoViewIfNeeded();
await expect(OptionHour).toBeVisible();
await expect(OptionHour).toBeEnabled();
await OptionHour.click(); PlaylistDatePicker = page.locator('.react-datepicker__input-container');
await expect(PlaylistDatePicker).toBeVisible();
await expect (PlaylistDatePicker).toBeEnabled();
await PlaylistDatePicker.click();


});

test('PlayoutManualMode', async ({ page }) =>  {


const content = page
  .getByTestId('info-[object Object]')
  .nth(2);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();


const target = page.locator('div').filter({ hasText: /^Player 1$/ }).first();
await expect(target).toBeVisible();
    await expect(target).toBeEnabled();
//FaderBefore play
  const faderDuration = page.getByText(':00.000:00.0').first();

await content.dragTo(target);

const content2 = page
 .getByTestId('info-[object Object]')
 .nth(3);

await expect(content2).toBeVisible();
await expect(content2).toBeEnabled();



const target2 = page.locator('div').filter({ hasText: /^Player 2$/ }).first();
await expect(target2).toBeVisible();
    await expect(target2).toBeEnabled();
    //FaderBefore play
const fader2Duration = page.getByText(':00.000:00.0').first();

await content2.dragTo(target2);
await page.waitForTimeout(7000);


await page.keyboard.press('1');

await page.keyboard.press('2');

// VALIDASI: durasi berubah & bukan 00.000:00.0
    await expect(async () => {
    const durationText = (await fader2Duration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 7000
  });

  // VALIDASI: durasi berubah & bukan 00.000:00.0
    await expect(async () => {
    const durationText = (await faderDuration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 7000
  });
  
expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

await page.waitForTimeout(7000);


});

test('PlayoutHotkey', async ({ page }) =>  {

    const content = page
  .getByTestId('info-[object Object]')
  .nth(4);

await expect(content).toBeVisible({timeout:10000});
await expect(content).toBeEnabled();

const PresetHotkey1 = page.locator('div').filter({ hasText: /^Drag Here$/ }).nth(5);
await expect(PresetHotkey1).toBeVisible();
await expect(PresetHotkey1).toBeEnabled();



await content.dragTo(PresetHotkey1);

const hotkey1 = page.getByText('00:00:24Flight 5 _ Motiv').nth(1);
await hotkey1.click();

 await page.waitForTimeout(5000);

expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

});

test('PlayoutAutoMode', async ({ page }) =>  {

  const faderDuration = page.getByText(':00.000:00.0').first(); // sesuaikan dengan DOM asli



    const AutoPlayout = page.getByRole('button', { name: 'Auto' });
    await expect(AutoPlayout).toBeVisible();
    await expect(AutoPlayout).toBeEnabled();
    await AutoPlayout.click();

   // VALIDASI: durasi berubah & bukan 00.000:00.0
  await expect(async () => {
    const durationText = (await faderDuration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 15000
  });

 await page.waitForTimeout(5000);

expect(pageCrashed).toBe(false);
expect(jsError).toBe(false);

});






