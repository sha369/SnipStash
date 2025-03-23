import { app, Menu, Tray, clipboard, globalShortcut, nativeImage } from 'electron';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

let tray = null;
let clipboardHistory = new Set();
const MAX_HISTORY = 20;
const historyFile = path.join(app.getPath('userData'), 'clipboard-history.json');

// Load clipboard history
function loadHistory() {
    try {
        if (fs.existsSync(historyFile)) {
            const data = fs.readFileSync(historyFile, 'utf8');
            clipboardHistory = new Set(JSON.parse(data) || []);
        }
    } catch (error) {
        console.error("Error loading clipboard history:", error);
        clipboardHistory = new Set();
    }
}

// Save clipboard history only if it changes
function saveHistory() {
    try {
        fs.writeFileSync(historyFile, JSON.stringify([...clipboardHistory]), 'utf8');
    } catch (error) {
        console.error("Error saving clipboard history:", error);
    }
}

// Monitor clipboard efficiently
function watchClipboard() {
    let lastText = clipboard.readText().trim();
    setInterval(() => {
        let text = clipboard.readText().trim();
        if (text && text !== lastText) {
            clipboardHistory = new Set([text, ...clipboardHistory]); // ✅ New items added at the top
            if (clipboardHistory.size > MAX_HISTORY) {
                clipboardHistory = new Set([...clipboardHistory].slice(0, MAX_HISTORY));
            }
            saveHistory();
            updateTrayMenu();
            lastText = text;
        }
    }, 500); // ✅ Faster updates
}

// Create tray menu
function createTray() {
    tray = new Tray(nativeImage.createEmpty()); // No icon, only text in menu bar
    tray.setTitle('SnipStash'); // Show text instead of an icon
    tray.setToolTip('Clipboard Manager');
    tray.setIgnoreDoubleClickEvents(true);
    updateTrayMenu();
    tray.on('click', showClipboardMenu);
}

// Show clipboard menu
function showClipboardMenu() {
    updateTrayMenu();
    tray.popUpContextMenu();
}

// Update tray menu (Optimized with caching)
function updateTrayMenu() {
    const historyArray = [...clipboardHistory];
    const contextMenu = Menu.buildFromTemplate([
        ...historyArray.map((text, index) => ({
            label: text.length > 40 ? text.substring(0, 40) + '...' : text,
            accelerator: index < 9 ? `CmdOrCtrl+${index + 1}` : undefined,
            click: () => pasteText(text)
        })),
        { type: 'separator' },
        { label: 'Clear History', click: clearHistory },
        { label: 'Quit', role: 'quit' }
    ]);
    tray.setContextMenu(contextMenu);
}

// Clear clipboard history
function clearHistory() {
    clipboardHistory.clear();
    saveHistory();
    updateTrayMenu();
}

// Paste selected text
function pasteText(text) {
    clipboard.writeText(text);
    exec("osascript -e 'tell application \"System Events\" to keystroke \"v\" using command down'");
}

// Register global shortcuts
function registerShortcuts() {
    globalShortcut.register('CommandOrControl+Shift+V', showClipboardMenu);
    for (let i = 1; i <= 9; i++) {
        globalShortcut.register(`CommandOrControl+${i}`, () => {
            const historyArray = [...clipboardHistory];
            if (historyArray[i - 1]) pasteText(historyArray[i - 1]);
        });
    }
}

// Electron app ready event
app.whenReady().then(() => {
    createTray();
    loadHistory();
    watchClipboard();
    registerShortcuts();
});

// Cleanup on quit
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});