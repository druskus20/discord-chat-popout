

chrome.tabs.onUpdated.addListener(async () => {
  let [tab] = await chrome.tabs.query({ 
    active: true, 
    url: ["*://discord.com/channels/*/*"], 
  });
  
  if (tab == null) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['popoutbutton.js']
  });  
});


