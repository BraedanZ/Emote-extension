let word = 'bear';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ word });
  console.log(`The word we are counting is ${word}`)
});