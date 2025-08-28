document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["highlights"], (data) => {
    const highlights = data.highlights || [];
    const list = document.getElementById("highlightList");
    highlights.forEach((highlight) => {
      const li = document.createElement("li");
      li.textContent = `${highlight.text} (${new Date(highlight.timestamp).toLocaleString()})`;
      list.appendChild(li);
    });
  });
});