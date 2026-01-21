import { test, expect } from '@playwright/test';



test('testBugHotkeyLinkmode', async ({ page }) => {
let pageCrashed = false;
let jsError = false;

page.on('crash', () => {
  pageCrashed = true;
});

page.on('pageerror', (err) => {
  jsError = true;
  console.error(err.message);
});


await page.goto('https://live-aps1.radio.cloud/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjE1ZDcxOGUzLTBkNTItNDFiNy1iNzEzLTE0M2E5OTRjMjZkNiJ9.eyJ1c2VyTGl2ZUlkIjoiYTM1NDE2MjktMmQ4OC00ZGJjLWE2ODMtYTg2NzYzOTBlYzgwIiwicm9vbUlEIjoiQlJNLUIzLUJSWC1SRUMiLCJjYW5LaWNrVXNlciI6ZmFsc2UsIm1pY0ZhZGVySWQiOjUsIm1pY0ZhZGVyTGFiZWwiOiJLQUwiLCJiaXRSYXRlIjoyNTYwMDAsIm1pY0Fsd2F5c09uIjpmYWxzZSwic2VydmVyQ29kZSI6IkFaLURFLUZSQSIsIm5ldHdvcmtDb2RlIjoiQlJYIiwiYWxsb3dGYWRlckNoYW5nZSI6dHJ1ZSwiaXNTZXJ2ZXIiOjAsImVjaG9Db21wZW5zYXRpb25FbmFibGUiOmZhbHNlLCJyZW9yZGVyRmFkZXIiOmZhbHNlLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJuZXR3b3JrTW9kZSI6ZmFsc2UsInN0b3JhZ2VQcm92aWRlciI6IkFXUyIsInN0b3JhZ2VCYXNlRGlyIjoiZnJhLXMzYi1scy1saXZlLXJlY29yZGluZy1hdWRpby9SQVcvQlJYL0JSTSIsInJlZ2lvbiI6ImV1LWNlbnRyYWwtMSIsImZpbGVOYW1lIjoiQlJYLUJSTS0yMDI2LTAxLTE5LTEwMTIyNi53ZWJtIiwiY2FsbEJhY2tMaW5rIjoiaHR0cHM6Ly9icmlkZ2luZy5yYWRpby5jbG91ZC9saXZlX3JlY29yZGluZ19kb25lP2ZpbGVuYW1lPUJSWC1CUk0tMjAyNi0wMS0xOS0xMDEyMjYud2VibSIsInJlY29yZExhYmVsIjoiVlQgQlJYIDE5LTAxIiwiY29ubmVjdEJyaWRnZSI6ZmFsc2UsInJhZGlvSW5mb3JtYXRpb24iOlt7InJhZGlvTmFtZSI6IkJyaWxsdXggUmFkaW8iLCJyYWRpb0ltYWdlIjoiaHR0cHM6Ly9kYjFxdTZzd3lxZjZ4LmNsb3VkZnJvbnQubmV0L2FmZmlsaWF0ZXMvYnJpbGx1eC1yYWRpby5wbmciLCJyYWRpb0NvZGUiOiJCUk0iLCJjaGFubmVsSWQiOiIxNTkzIiwibmV0d29ya0lkIjoiMTE0IiwiZm9ybWF0SWQiOiIxIn1dLCJsb2NhbENvZGUiOiJCUk0iLCJpc19zaGlmdF9jaGVjayI6ZmFsc2UsImp0aSI6IjBmMTdiNWM3LTU0NzQtNGU4YS1hYTA2LTRkZmUwNjE1YzhhNCIsImlhdCI6MTc2ODc5MjM0NywiZXhwIjoxNzY5Mzk3MTQ3fQ.DdO3VRJcqbmVYK09YW_bqx9H27qAFhnEGPbV1igN6n4P1ogWuib09DKR16Z2nZMmDqlKJTeqZOeQ3PQTpcHSv5qCZ5hNeeIdxXQezgcIjH1WHG3FbqRQ7tBGMHs7jYVuYKKOmrEVFD9cG9tm8kHU41-1yEJ_aMmSJ1HqTWX8HfKI8XhkNX6R0fo5E5wBYrcLSoyNPfckzeWeQrAaXCCjhqUAo4E6h69X9Vsc4XwCGaPEhHV0f_35y_LScf113uf8GQMzNZBiWe73101RCyIjySs1vQAVYYPJQdNofx1kYd427x5hzDvLP22TtKaT-8j-JwMzORmi5v_5t2ih5jGTfRlYkPbuf4_u70rV74YUtzobKbs0hKhUiWppvQbi4iK62RKfBEjpG_2LJMFy2Q9gyv7FOAtq_eUcQ4qSCNYBEA-cevjkKpBgErtpHeC8JqjSxKE9Sj_Ep9E3Gpu-9hP_aFX57r8THaZW0iUBbgCPxoaGQD9JOauMuQhSfUiPCrfSVkAsjTXD5pfEasNMCQS6rVnLi6XrGV0dQwYmzagGB9elMftKGFhX6aREJrXdcS3Hj-ZEpAn7N-fto7-3M4BF1ypZWZfq_EWzCI4lrLtOhj2qUDrIu1oa4oDjxFgCj3AWmimoeyn35FdjKyoEcHVkVgvO2lkwMv_9XDqsVDBmYZI');

const  okButton = page.getByRole('button', { name: 'OK' });

await expect (okButton).toBeVisible();
await expect(okButton).toBeEnabled();
await okButton.click();


const content = page
  .getByTestId('info-[object Object]')
  .nth(3);

await expect(content).toBeVisible();
await expect(content).toBeEnabled();

await content.scrollIntoViewIfNeeded();
await expect(content).toBeVisible();
await expect(content).toBeEnabled();


const target = page.getByText('hotkey 100:00.000:00.0+100-10');

await expect(content).toBeVisible();
await expect(content).toBeEnabled();
await content.dragTo(target);


const Linkmode = page.locator('.info_box.box3 > .info_box_container > .link-mode');

await expect(Linkmode).toBeVisible();
await expect(Linkmode).toBeEnabled();
await Linkmode.click();


const ON = page.getByRole('button', { name: 'OFF' }).nth(3);
await expect(ON).toBeVisible();
await expect(ON).toBeEnabled();
await ON.click();


const OFF = page.getByRole('button', { name: 'ON' });
await expect(OFF).toBeVisible();
await expect(OFF).toBeEnabled();
await OFF.click();

expect(pageCrashed).toBe(true);
expect(jsError).toBe(true);


});