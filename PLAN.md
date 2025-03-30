# 🚀 Personal Finance Tracker - Project Plan

## 📌 Phase 1: Project Setup (2-3 Days)
### ✅ Steps:
1. **Initialize Project**
   x Create a new React project using Vite or Create React App.
   - Set up folder structure (components, styles, assets, etc.).
   - Install necessary dependencies (`react-router-dom`, `recharts`, etc.).
   
2. **Setup Global Styles**
   - Create a `global.css` file.
   - Define CSS variables for colors, spacing, typography, etc.
   - Implement a reset/normalize stylesheet.

3. **Create a Basic UI Layout**
   - Implement a **NavBar** with a logo and navigation links.
   - Set up a **main container** to hold content.

---

## 📌 Phase 2: Core Features (4-6 Days)
### ✅ Steps:
4. **Implement Income & Expense Table**
   - Create a reusable **Table component**.
   - Add dummy transaction data for testing.
   - Implement styles using BEM methodology.

5. **Build the Add Income/Expense Form**
   - Create an `AddTransaction` component.
   - Include input fields for amount, category, and date.
   - Handle form submission and update state.

6. **Connect Form to Table**
   - Store transactions in local state.
   - On form submission, add new transactions to the table.
   - Implement a delete button to remove transactions.

---

## 📌 Phase 3: Data Visualization (3-4 Days)
### ✅ Steps:
7. **Implement Charts**
   - Use `recharts` to create **two charts**:
     - **Pie Chart** → Shows income vs. expenses.
     - **Bar Chart** → Displays expenses per category.
   - Connect charts to transaction data.

8. **Make Data Persistent**
   - Store transactions in `localStorage`.
   - Load saved transactions when the app starts.

---

## 📌 Phase 4: Enhancements & Optimization (3-5 Days)
### ✅ Steps:
9. **Add Budgeting Feature (Future Enhancement)**
   - Allow users to set monthly budgets.
   - Show progress (e.g., "You’ve spent 70% of your budget").

10. **Improve UI & UX**
    - Add animations and better styling.
    - Make the app fully responsive.

11. **Deploy the App**
    - Deploy using **Vercel/Netlify/GitHub Pages**.
    - Optimize for performance.

---

## 🎯 Final Goal
A fully functional **Personal Finance Tracker** that allows users to **add, track, and visualize** their income and expenses! 🚀

---

## ⏳ Estimated Total Time: 12-18 Days
