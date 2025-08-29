document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["highlights"], (data) => {
    const highlights = data.highlights || [];
    const list = document.getElementById("highlightList");
    highlights.forEach((highlight) => {
      const li = document.createElement("li");
      li.textContent = `${highlight.id}. ${highlight.text}`;
      list.appendChild(li);
    });
  });
});

document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.set({ highlights: [] }, () => {
    const list = document.getElementById("highlightList");
    list.innerHTML = "";
  });
});