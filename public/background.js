/*eslint-disable*/

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.local.set({ targetOption: '_parent' });
  }
});
