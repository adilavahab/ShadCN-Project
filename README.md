# 🧩 SHADCN Dashboard

A modern admin dashboard built using **Next.js**, **Tailwind CSS**, **TypeScript**, **ShadCN UI**, and a custom **Node.js backend**.

This project fetches dynamic data from a backend server via API. It includes responsive UI components, charts, user forms, and lists — all styled with ShadCN components.

---

## ⚙️ Tech Stack

- **Frontend**:  
  - Next.js 15 (App Router)  
  - Tailwind CSS  
  - TypeScript  
  - ShadCN UI  
  - Recharts  

- **Backend**:  
  - Node.js  
  - Express.js  
  - CORS  
  - JSON files as API data source  

---

## 🔗 Backend Connection

All components fetch their data dynamically from:

```
GET https://shadcn-project.onrender.com/api/:filename
```

**Example**:

```ts
const res = await fetch("https://shadcn-project.onrender.com/api/bar-chart-data");
const data = await res.json();
```

The backend reads and returns JSON from `/backend/data`.

---

## 🚀 How to Run

### 1. Start the Backend Locally

```bash
cd backend
node index.js
```

Runs at: `http://localhost:5000`

> Or deploy backend to Render: `https://shadcn-project.onrender.com`

### 2. Start the Frontend

```bash
cd ..
npm install
npm run dev
```

Runs at: `http://localhost:3000`

> Or deploy frontend to Vercel: `https://shad-cn-project-mu.vercel.app`

---

## 📌 Features Completed

- ✅ Bar, Pie, Area, Line charts (fetched dynamically)
- ✅ Popular content and latest transactions cards
- ✅ Todo list with checkboxes
- ✅ Editable user form with Zod + React Hook Form
- ✅ Fully responsive design with theme switcher
- ✅ All data served through backend API

---

## 🧠 Project Purpose

- Practice full-stack development (Next.js + Express)
- Learn API-based data fetching
- Understand ShadCN's modular UI architecture
- Build scalable dashboard interfaces

---

## 🔮 Future Scope

- Connect backend to real database (MongoDB, PostgreSQL, etc.)
- Add authentication (NextAuth / JWT)
- Add full CRUD features to charts, users, todos
- Upload media or images via backend
- Role-based permissions for admin/user panels

---

> Built with 💻 by **Adila Vahab** for learning and practice.
