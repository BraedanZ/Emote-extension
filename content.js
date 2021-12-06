const word = chrome.storage.sync.get("word", ({ word }))
const re = new RegExp(word, 'gi');
const matches = document.documentElement.innerHTML.match(re)