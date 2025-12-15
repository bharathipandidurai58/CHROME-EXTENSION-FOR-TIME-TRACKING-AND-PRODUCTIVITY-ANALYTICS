let currentTab = null;
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  saveTime(currentTab, Date.now() - startTime);
  currentTab = tab.url;
  startTime = Date.now();
});

chrome.windows.onFocusChanged.addListener(() => {
  saveTime(currentTab, Date.now() - startTime);
  startTime = Date.now();
});

function saveTime(url, time) {
  if (!url) return;
  chrome.storage.local.get({data: {}}, (result) => {
    const data = result.data;
    data[url] = (data[url] || 0) + time;
    chrome.storage.local.set({data});
  });
}
