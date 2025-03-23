# 📋 SnipStash – A Lightweight macOS Clipboard Manager  

**SnipStash** is a **fast, lightweight, and privacy-focused** clipboard manager for macOS. It helps you manage your clipboard history efficiently while ensuring sensitive data like passwords are never stored.  

> 🚀 **No cloud storage. No tracking. Works 100% locally.**  

---

## ✨ Features  
✅ **Clipboard History** – Store up to 20 recent clipboard items  
✅ **One-Click Paste** – Click an item in the menu bar to paste instantly  
✅ **Global Shortcuts** – Use `Cmd + 1-9` to quickly paste items  
✅ **Auto-Cleanup** – Keeps only the most recent 20 copied items  
✅ **Sensitive Data Protection** – Ignores passwords and OTPs  
✅ **Super Fast & Lightweight** – Runs in the background with minimal resource usage  
✅ **No Extra Windows** – Fully integrated into the macOS menu bar  

---

## 📷 Screenshot  
![SnipStash Screenshot](screenshot.png)  

---

## 🚀 Installation  
### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/your-username/SnipStash.git  
cd SnipStash  
```  

### 2️⃣ Install Dependencies  
```sh  
npm install  
```  

### 3️⃣ Run the App  
```sh  
npm start  
```  

---

## ⌨️ Usage  
### 📋 Copy & Store Clipboard Items  
1. Copy text (`Cmd + C`) → It is **automatically stored** in history  
2. Click the **SnipStash icon** in the macOS menu bar → **Clipboard history appears**  
3. Select an item → It **pastes instantly** where your cursor is  

### ⌨️ Keyboard Shortcuts  
| Shortcut | Action |  
|----------|--------|  
| `Cmd + Shift + V` | Open clipboard menu |  
| `Cmd + 1-9` | Paste the corresponding clipboard item |  
| `Cmd + C` | Copy text (automatically stored in history) |  

### 🔒 Privacy & Security  
- **Sensitive data (passwords, OTPs, PINs) are automatically ignored.**  
- **No cloud sync** – Everything stays **local** on your machine.  
- **Clipboard history is stored in Locally.**  

---

## 🛠 Development  
### 📜 File Structure  
```  
SnipStash/  
│── index.js             # Main Electron app logic  
│── package.json         # Project metadata & dependencies  
│── README.md            # Documentation  
│── screenshot.png       # App screenshot  
└── assets/  
    ├── icon.icns  # App logo  
```  

### 💡 Tech Stack  
- **Electron.js** – For the native macOS app  
- **Node.js (fs, child_process)** – File system and command execution  
- **AppleScript** – For simulating `Cmd + V` paste  

---

## 🛠 Contributing  
🚀 **Pull requests are welcome!** If you'd like to contribute:  
1. **Fork** the repo  
2. **Create a new branch** (`git checkout -b feature-name`)  
3. **Make changes** and **commit** (`git commit -m "Added new feature"`)  
4. **Push to your branch** (`git push origin feature-name`)  
5. Open a **Pull Request** 🚀  

---

## 📥 Download for macOS  
[![Download SnipStash](https://img.shields.io/badge/Download-macOS-blue?style=for-the-badge&logo=apple)](dist/SnipStash-1.0.0-arm64.dmg)

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 🤝 Support  
If you like **SnipStash**, give this repo a ⭐ **star** on GitHub!  
For issues, open a **GitHub Issue** or reach out to me. 😊  

---

🔥 **Enjoy a seamless clipboard experience on macOS!** 🚀  
