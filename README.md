# Modern Shop - refactored e-commerce store 🚀

![Project Screenshot](/public/screenshot.png)

## 💡 About The Project

This project is a **modernization case study** of a legacy e-commerce application. The goal was not just to build a shopping cart, but to simulate a real-world scenario where a developer takes an outdated codebase/concept and refactors it using modern standards and best practices for 2025.

I focused on performance, type safety, and clean architecture, migrating from a legacy stack (Vanilla JS/Old Redux) to a robust **React + TypeScript + Redux Toolkit** ecosystem.

### 🎯 Key Objectives
* **Modernization:** Migrating from CRA (Create React App) to **Vite** for better performance.
* **Type Safety:** rewriting logic to **TypeScript** to eliminate runtime errors.
* **State Management:** Implementing **Redux Toolkit** to manage cart state efficiently.
* **UX/UI:** Designing a responsive, dark-mode interface with instant feedback.

---

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript
* **Build Tool:** Vite
* **State Management:** Redux Toolkit (RTK) + React-Redux
* **Styling:** Custom CSS3 (Flexbox/Grid, CSS Variables, Responsive Design)
* **Data:** Mock API Service (Simulating async data fetching with latency)

---

## 🔄 Refactoring Case Study: Before vs. After

Here is a breakdown of the architectural decisions made during the development process:

| Feature | Legacy Approach (The Problem) | My Modern Implementation (The Solution) |
| :--- | :--- | :--- |
| **Language** | JavaScript (Loose typing, prone to errors) | **TypeScript** (Strict interfaces for Products & Cart) |
| **State** | Redux (Boilerplate heavy, switch/case) | **Redux Toolkit** (Slices, mutable logic with Immer) |
| **Bundler** | Webpack / CRA (Slow startup) | **Vite** (Instant HMR & optimized build) |
| **Data Fetching** | Direct fetch in components | **Service Layer** (Decoupled logic & Mock API pattern) |
| **Styling** | Inline styles / inconsistent CSS | **Scoped CSS** with global variables & RWD Grid |

---

## ✨ Key Features

✅ **Dynamic Shopping Cart:**
* Add/Remove items.
* Update quantities directly from the sidebar.
* Real-time total price calculation.
* Persisted state during the session.

✅ **Product Filtering:**
* Dynamic filtering logic based on available product properties (Color).
* Uses `useMemo` and `Set` to automatically generate filter categories from data.

✅ **Performance & UX:**
* **Mock API Pattern:** Simulates network latency to handle loading states properly.
* **Optimized Rendering:** Uses React keys and efficient array methods.
* **Responsive Grid:** Looks great on mobile, tablet, and desktop.

---

## 📦 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GxbrielZ/modern-shop-refactor.git
    ```
2.  **Install dependencies:**
    ```bash
    cd modern-shop
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.
