# 🎮 Modern Tic-Tac-Toe

A sleek, modern implementation of the classic Tic-Tac-Toe game built with **React**, **TypeScript**, and **Vite**.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-ISC-green?style=flat-square)

---

## 🕹️ About

A two-player Tic-Tac-Toe game with a modern UI, built as a frontend project using the latest versions of React and TypeScript. Players take turns marking X and O on a 3×3 grid, with automatic win/draw detection.

---

## ✨ Features

- ⚡ Lightning-fast dev experience powered by Vite
- 🔷 Fully type-safe with TypeScript
- ♻️ Component-based architecture using React
- 🏆 Win detection across all rows, columns, and diagonals
- 🤝 Draw detection when the board is full
- 🔄 Game reset/restart functionality
- 📱 Responsive design

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.5 | UI library |
| TypeScript | ^6.0.3 | Type safety |
| Vite | ^8.0.10 | Build tool & dev server |
| CSS | — | Styling |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/theaditya24/TIC-TAC-TOE.git

# Navigate into the project directory
cd TIC-TAC-TOE

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure
TIC-TAC-TOE/
├── src/               # Source files (components, logic, styles)
├── dist/              # Production build output
├── public/            # Static assets
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and scripts

---

## 🎯 How to Play

1. The game starts with **Player X**.
2. Players alternate clicking cells to place their mark.
3. The first player to get **3 in a row** (horizontally, vertically, or diagonally) wins.
4. If all 9 cells are filled with no winner, the game ends in a **draw**.
5. Click **Restart** to play again.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Aditya** — [@theaditya24](https://github.com/theaditya24)

---

## 📄 License

This project is licensed under the **ISC License**.
