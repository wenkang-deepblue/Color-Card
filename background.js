// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("color_card.html")
    });
  });