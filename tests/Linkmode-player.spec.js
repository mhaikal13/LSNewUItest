import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://live-beta.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6ImJmODgyY2M4LWY5YjItNDE5NC1hYjMyLWUyZjdhODM4NTFhMCJ9.eyJ1c2VyTGl2ZUlkIjoiNTlkNjRlN2YtZGUyMi00ODJmLTkwYjEtMjdkYjk2NjgxMzJjIiwicm9vbUlEIjoiRlJCLU0xLUJXRSIsImNhbktpY2tVc2VyIjpmYWxzZSwibWljRmFkZXJJZCI6NiwibWljRmFkZXJMYWJlbCI6IlRFU1QiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFXUy1JRC1KS1QiLCJuZXR3b3JrQ29kZSI6IkJXRSIsImFsbG93RmFkZXJDaGFuZ2UiOnRydWUsImlzU2VydmVyIjowLCJlY2hvQ29tcGVuc2F0aW9uRW5hYmxlIjpmYWxzZSwicmVvcmRlckZhZGVyIjpmYWxzZSwidGltZVpvbmUiOiJFdXJvcGUvQmVybGluIiwibmV0d29ya01vZGUiOmZhbHNlLCJhbHRlcm5hdGVWaWV3Ijp0cnVlLCJjb25uZWN0QnJpZGdlIjpmYWxzZSwicmFkaW9JbmZvcm1hdGlvbiI6W3sicmFkaW9OYW1lIjoiQmF5ZXJud2VsbGUiLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYndlLnN2ZyIsInJhZGlvQ29kZSI6IkZSQiIsImNoYW5uZWxJZCI6IjU2MyIsIm5ldHdvcmtJZCI6IjYwIiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJGUkIiLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6ImMyMzQwNjZiLTQ1YmUtNGY5Mi05YmI5LWRjYWUwMmUyOTU4ZiIsImlhdCI6MTc2OTQ5NDMwOCwiZXhwIjoxNzY5NTgwNzA4fQ.ECgTpVhguw9FjM6pS-G2LNcCdJj7EqJcGIGOwpALboNrRQOWHvV4vtNNuYP7fT4NQHo6WH7AIijYvmpANoUHfbTxgvxXW_D-yIWZsKDZz-aVv2Ek_0Z3mxTvAH8i_Z4QTDZVp_RPejuFyARLgsbNsfmzHUKj1_P2TT13Lj9Rj6hoH6wy2Q8OyzpRISzIH5Vu_i5V7uoOjovhnae9xm54IL_xj8olwhje8nCWJ5NLjEiAaEeVXpGBCeYlDf9T_2s4w5bv6KFpe231bdk_Mo5XtiR8RwozDQac5z2M26KeZ6C3YJVABIwb-AlJpJ9hskN97Uua14C9Vl6cMlS_m9CAKrxmdRu2pNfhBfgoSZvkcrzDyxulD3nNvEgoTCYkya4SUrPppW0uVGre8olDPQusz9PQw23g9whYhUUnh0UcPdE1cKJ56sQqa2X29BHEw0DFGYEoUb7QHzDrLZjYKEgR37qnO-0gUqwa9_DocKRB6XQa-a-Fx6oESCe-pGFZg95pTHFJDYnq_dC5toPAQRr_hhzyJPAhMyGRh3O19olXnkaqrnYkVzM5PibvsAKenk3g7G2m_7zmIwoPSIvvM0ArmoU8kRDr3RTw2dYnfn5xKZJTJ6q1mNFyo50wMqrxMW0JbwYBeB4g5Clc1x9lvLA93x7kJYeNl7ifcUjqGkM5jZY');


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



});

test('BUG LINK MODE', async ({ page }) =>  {

  const playlist = page.getByTestId('info-[object Object]').nth(2);
  await expect(playlist).toBeVisible();
  await expect(playlist).toBeEnabled();

  const addaudio = page.locator('.header-playlist > div:nth-child(3)');
  await expect(addaudio).toBeVisible();
  await expect (addaudio).toBeEnabled();
  await addaudio.click();

  const overlayaddaudio = page.locator('div').filter({ hasText: /^Add Audio$/ });
  await expect(overlayaddaudio).toBeVisible();
  await expect(overlayaddaudio).toBeEnabled();

  const typecontent = page.getByRole('combobox');
  await expect(typecontent).toBeVisible();
  await expect(typecontent).toBeEnabled();
  await typecontent.selectOption('12000');

  const contentaddaudio = page.getByText('00:01:0527.01.26 03.01 - 05.');
  await expect(contentaddaudio).toBeVisible();
  await expect(contentaddaudio).toBeEnabled();

  const contentDrop = page.getByTestId('info-[object Object]').nth(2);
  await expect(contentDrop).toBeVisible({timeout:700});
  await expect(contentDrop).toBeEnabled();

  await contentaddaudio.dragTo(contentDrop);

  //Exit Overlay Add Audio
  const X= page.locator('.song-header > svg');
  await expect (X).toBeVisible();
  await expect(X).toBeEnabled();
  await X.click();

  const content1 = page.getByTestId('info-[object Object]').nth(2);
  await expect(content1).toBeVisible();
  await expect(content1).toBeEnabled();

  const linkmode = page.locator('.info_box.box2 > .info_box_container > .link-mode');
  await expect(linkmode).toBeVisible();
  await expect(linkmode).toBeEnabled();
  await linkmode.click();


  const player1 = page.locator('div').filter({ hasText: /^Player 2$/ }).first();
  await expect(player1).toBeVisible();
    await expect(player1).toBeEnabled();
  //FaderBefore play
  const faderDuration = page.getByText(':00.000:00.0').first();

  await content1.dragTo(player1);

  await page.waitForTimeout(7000);

  await page.keyboard.press('2');

  // VALIDASI: durasi berubah & bukan 00.000:00.0
    await expect(async () => {
    const durationText = (await faderDuration.textContent())?.trim();
    expect(durationText).not.toBe('00.000:00.0');
  }).toPass({
    timeout: 7000
  });

  await page.waitForTimeout(700);

  });