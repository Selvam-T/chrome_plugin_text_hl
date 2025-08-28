chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "highlight") {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      span.textContent = message.text;
      range.deleteContents();
      range.insertNode(span);

      chrome.storage.local.get(["highlights"], (data) => {
        const highlights = data.highlights || [];
        highlights.push({
          text: message.text,
          url: window.location.href,
          timestamp: new Date().toISOString()
        });
        chrome.storage.local.set({ highlights });
      });
    }
  }
});