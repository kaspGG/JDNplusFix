chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed!');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message);
    // Handle message here
});
