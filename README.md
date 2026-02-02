⚠️ **Disclaimer**
This project is for **educational and testing purposes only**. Automating interactions with YouTube may violate YouTube’s Terms of Service. Use responsibly and at your own risk.

---

## 📌 Overview

This script uses **Playwright** with a persistent browser session to:

* Open YouTube Shorts
* Allow **manual login** (one-time)
* Automatically watch Shorts for a randomized duration
* Optionally **like** Shorts
* Scroll through Shorts using keyboard navigation
* Preserve session data between runs

It is designed to look more human-like by using:

* A real browser (Brave)
* Custom user agent
* Randomized watch times
* Persistent user profile

---

## 🛠️ Tech Stack

* **Node.js**
* **Playwright**
* **Chromium (Brave Browser)**

---

## 📂 Project Structure

```
.
├── youtube-session/    # Persistent browser profile (auto-created)
├── index.js            # Main script
└── README.md
```

---

## ✅ Prerequisites

* **Node.js** (v18+ recommended)
* **Brave Browser** (or Chromium-based browser)
* **Windows** (path can be adjusted for macOS/Linux)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/developedbykenya/yt-autolike-shorts.git
cd youtube-shorts-watcher
```

2. Install dependencies:

```bash
npm install playwright
```

3. Install Playwright browsers (if needed):

```bash
npx playwright install
```

---

## ⚙️ Configuration

### Browser Path

Update the browser executable path if needed:

```js
executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
```

**macOS example:**

```js
executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
```

**Linux example:**

```js
executablePath: '/usr/bin/brave-browser'
```

---

### Shorts Count

Control how many Shorts to watch:

```js
const COUNT = 5000;
```

---

### Watch Time

Each Short is watched for a random duration:

```js
const watchTime = 20000 + Math.floor(Math.random() * 5000);
// 20–25 seconds
```

---

## ▶️ Usage

Run the script:

```bash
node index.js
```

### First Run

1. A browser window will open.
2. Log in to your **YouTube account manually**.
3. Return to the terminal and press **ENTER**.
4. The script will start watching Shorts automatically.

Your session is saved in `youtube-session/`, so future runs won’t require logging in again.

---

## ❤️ Liking Shorts

The script attempts to like Shorts using this selector:

```js
like-button-view-model button[aria-label*="like this video"]
```

If YouTube updates its UI, this selector may need adjustment.

---

## 🤖 Anti-Detection Measures

* Persistent browser profile
* Custom user agent
* Disabled automation flags
* Real browser (not bundled Chromium)
* Randomized delays

> You can add additional anti-detection scripts if needed.

---

## 🧹 Cleanup

To reset login/session:

```bash
rm -rf youtube-session
```

---

## ❗ Known Limitations

* UI selectors may break if YouTube changes layout
* Heavy usage may trigger captchas or restrictions
* Not guaranteed to bypass YouTube detection systems

---

## 📜 License

MIT License — use, modify, and distribute freely.

---
