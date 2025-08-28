//Triggers when the extension is installed to create the menu.
//It adds "Highlight Selected Text" to the right-click context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "highlightText",
        title: "Highlight Selected Text",
        contexts: ["selection"]
    });
});

//Triggers when the menu item created above is clicked to send the message.
//Sends the selected text and "highlight" action to content.js
//in the identified chrome tab
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "highlightText") {
        chrome.tabs.sendMessage(tab.id, {
            action: "highlight",
            text: info.selectionText
        });
    }
});