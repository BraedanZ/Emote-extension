let countWord = document.getElementById("countWord");

// chrome.storage.sync.get("word", ({ word })) => {

// }

countWord.addEventListener("click", async() => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // function: countWordOnPage,
    files: ['content.js']
  });
});

// function countWordOnPage() {
//   chrome.sorage.sync.get("word", ({ word }) => {

//   })
// }