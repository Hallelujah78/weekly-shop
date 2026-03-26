# 🛒 Weekly Shopping List

A minimal, fast, and user-friendly shopping list app built with **React + TypeScript**.

Designed for quick weekly planning, with persistent state, clean interactions, and easy sharing.

---

## ✨ Features

- ➕ Add new items with automatic title formatting
- ✅ Toggle items as not required this shop (strike-through)
- 👁️ Hide/show not required items
- ❌ Delete items
- 📋 Copy active list to clipboard (ready to share)
- 💾 Persistent state using `localStorage`
- 🔔 Toast notifications for user feedback

---

## 🧠 Key Behaviours

- Non-required items are **excluded when copying** the list
- Items are **auto-capitalised** (including hyphenated words)
- State is **automatically persisted** on every update
- UI interactions are **intentionally simple and fast** (click = toggle)

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **styled-components**
- **react-toastify**
- **uuid**

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/Hallelujah78/weekly-shopping-list.git
cd weekly-shopping-list
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📋 Usage

Click ➕ to open the add item form
Click an item to toggle strikethrough (not needed this shop)
Click ❌ to delete an item
Use Hide/Show to filter non-required items
Click 📋 to copy the current (active) list

---

## 🏗️ Architecture & Design Decisions

### State Management

- Uses React hooks (useState, useEffect)
- No external state library — intentionally kept simple
- State is persisted via a custom localStorage utility

```TypeScript
useEffect(() => {
  setLocalStorage("shopping-list", items);
}, [items]);
```

### Data Persistence

- localStorage used for persistence across sessions
- Falls back to a default dataset if no stored data exists

### Separation of Concerns

- Components
  - `ShopItem` -> display + interaction
  - `AddItemForm` -> controlled form logic
- Utilities
  - Clipboard handling
  - String formatting
  - Storage helpers

### Clipboard Design

- Uses the Web Clipboard API
- Applies formatting before copying:

```TypeScript
shoppingList
  .filter(item => !item.strike)
  .map(item => item.name)
  .join("\n");
```

This ensures shared lists are clean and readable.

### UX Decisions

- Click anywhere on an item to toggle → faster interaction
- Delete button uses stopPropagation() to avoid accidental toggles
- Toast feedback for async actions (clipboard success/failure)
- Minimal UI to reduce friction

### 🔮 Future Improvements

- Drag-and-drop reordering
- Categories / grouping
- PWA support
- Accessibility improvements (keyboard navigation, ARIA)
- Unit + E2E test coverage (Cypress already configured)
- Persistence via database

---

## 📦 Deployment

Deployed [here.](https://weeklyshop.netlify.app/).

## Known Limitations

- No backend → data limited to browser storage
- Clipboard requires secure context (HTTPS)
- No validation on empty input (can be added)

## 👤 Author

Gavan Browne
GitHub: https://github.com/Hallelujah78
