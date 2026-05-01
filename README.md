# HMCTS Dev Test Frontend
This is a task management frontend built using Node.js, Express, Nunjucks and the GOV.UK Design System.

It integrates with a backend service to perform CRUD operations on tasks.

---

## 🚀 How to run

### Prerequisites
- Node.js (v18+ recommended)
- Yarn

### Install dependencies
yarn install

### Start application
yarn start:dev

App runs on: http://localhost:3100

---

## 🔗 Backend

This frontend expects a backend service running on:

http://localhost:8080

---

## ✨ Features

- View list of tasks
- Create new tasks
- Update task title and due date
- Update task status (To do / In progress / Completed)
- Delete tasks

---

## 🧠 Design decisions

- Used server-side rendering (Nunjucks) for simplicity and quick iteration
- Separated status updates from full task updates for clarity
- Used simple routing instead of dynamic loading for reliability
- Focused on clean, readable UI using GOV.UK components

---

## 🧪 Testing

Includes a basic route test using Jest and Supertest.


