# Chrome Plugin: Text Highlighter
## Overview
- **Name**: Text Highlighter
- **Purpose**: Allows users to highlight selected text on any webpage via right-click context menu and saves highlights to local storage.
- **Features**:
    - Add highlight to selected text.  
    - Save highlights persistently.  
    - View saved highlights in popup. 
    - Clear saved highlights in popup.   

## Step-by-Step Development Process
### 1. Plan and Setup
- **Define Functionality**: Context menu to highlight text, save to chrome.storage, and display in popup.
- **Tools Needed**: Text editor (e.g., VS Code), Chrome browser, basic HTML/CSS/JS knowledge.
- **Directory Structure**:
  ```
  text_highlighter/
  ├── manifest.json
  ├── background.js
  ├── content.js
  ├── popup.html
  ├── popup.js
  └── popup.css
  ```
### 2. Create Manifest File  
Define plugin metadata, permissions, and scripts.  

It specifies the extension's name, version, scripts, and resources, like which files run in the background or on web pages.  

### 3. Implement Background Script  

Handle context menu creation and message passing.  

**1.  Creates Context menu:**   
    
When the extention is installed, creates a "Highlight Selected Text" option to the right-click menu.

**2.  Sends Message to Content Script:**  

Including the selected text (info.selectionText) and the action "highlight" to the tab (tab.id) where the click occurred.  

### 4. Create Content Script  

Apply highlights to selected text and save to storage.  

**1.  Listens for messages from background.js:**   

**2.  If the message’s action is "highlight", it:**   

- Gets the selection range.
- Creates a <span> element with yellow background.
- Sets the span’s text to the message’s text.
- Replaces the selected text with the highlighted span.
- Retrieves existing highlights from chrome.storage.local, 
adds a new highlight (text, URL, timestamp), and saves it back.

### 5. Create Popup Interface  

Display saved highlights in a popup when the extension icon is clicked.  

**popup.html** 
- Defines the UI for the extension’s popup
- Display saved highlights.display in a separate popup window when you 
click the extension’s icon in Chrome’s toolbar.
- It’s independent of the webpage’s DOM, shown in a small overlay window.  

**popup.js**  
- Injects list items into the popup’s html to show stored highlights.

### 6. Testing  

**Load extension in Chrome:**

- Open Chrome → Extensions → Manage Extensions.
- Enable "Developer mode."
- Click "Load unpacked" and select the text_highlighter folder.


**Test functionality:**

- Right-click selected text on a webpage → Choose "Highlight Selected Text."
- Verify text is highlighted in yellow.
- Click extension icon → Check if popup shows saved highlights with timestamps.


**Debug using Chrome's DevTools (Console and Storage tabs).**










    