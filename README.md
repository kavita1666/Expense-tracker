# Expense-tracker

A simple Expense Tracker application built with React. Users can add expenses, and a tabular view helps track and manage expenses efficiently.

## Features
- Add Expenses: Users can input expenses using a form with basic validation.
- Table View: Displays all expenses in a structured tabular format.
- Filtering & Sorting:
    - Filter expenses based on category.
    - Sort expenses by amount.
- Local Storage Support:
    - The tabular data is stored in localStorage to persist data even after page refresh.
    - When a user adds or updates expenses, the data is saved and loaded automatically.

## Tech Stack
- React: Frontend framework
- React Forms: Used for input handling and validation
- Local Storage: Saves and retrieves expense data for persistence

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
