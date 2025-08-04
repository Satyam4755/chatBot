# 🤖 Smart Q&A Chatbot with Google Sheets + Node.js

A lightweight chatbot that intelligently answers questions based on data stored in a Google Sheet — with support for 🧠 fuzzy logic and 📎 embedded links!

---

## 🚀 Features

- 🔌 Google Sheets as your dynamic database (no manual backend DB required!)
- 🤯 Fuzzy question matching using Fuse.js
- 📎 Link support in answers (Google Drive / public URLs)
- 🔒 Simple, extensible Node.js backend
- 🎯 Clean API response: `{ reply, links[] }`

---

## 🗂️ Tech Stack

- **Backend:** Node.js, Express
- **Logic:** Fuse.js (fuzzy search)
- **Data Source:** Google Sheets (via Apps Script Web API)

---

## 📄 Folder Structure

📁 project-root/
├── controllers/
│   └── chatbotController.js     # Core logic to match and reply
├── utils/
│   └── fetchSheetData.js        # Fetches data from Google Sheets
├── routes/
│   └── chatbot.js               # API route: POST /api/chat
├── app.js                       # Express server setup
├── .env                         # Environment variables
└── README.md                    # You are here!

---

## 🛠️ Setup Instructions

1. **Clone this repo**

```bash
git clone https://github.com/your-username/your-chatbot.git
cd your-chatbot```
