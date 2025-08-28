# Chrome Plugin: Text Highlighter
## Overview
- **Name**: Text Highlighter
- **Purpose**: Allows users to highlight selected text on any webpage via right-click context menu and saves highlights to local storage.
- **Features**:
    - Add highlight to selected text.  
    - Save highlights persistently.  
    - View saved highlights in popup.    

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

#### 1. Creates Context menu:   
    
When the extention is installed, creates a "Highlight Selected Text" option to the right-click menu.

#### 2. Sends Message to Content Script:  

Including the selected text (info.selectionText) and the action "highlight" to the tab (tab.id) where the click occurred.




    