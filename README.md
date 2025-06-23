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
GET http://localhost:5000/api/:filename
```

**Example**:

```ts
const res = await fetch("http://localhost:5000/api/bar-chart-data");
const data = await res.json();
```

The backend reads and returns JSON from `/backend/data`.

---

## 🚀 How to Run

### 1. Start the Backend

```bash
cd backend
node index.js
```

Backend runs at: `http://localhost:5000`

### 2. Start the Frontend

```bash
cd ..
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 📌 Features Completed

- Bar, Pie, Area, Line charts (dynamic data)
- Latest transactions and popular content cards
- Todo list with checkboxes
- Editable user form using React Hook Form + Zod
- Responsive layout and theme toggle
- All data served via backend API

---

## 🧠 Project Purpose

- Practice full-stack integration (Next.js + Express)
- Learn API-based data fetching instead of hardcoding
- Master modular UI with ShadCN components
- Build reusable, real-world dashboard layouts

---

## 🔮 Future Scope

- Connect backend to a real database (MongoDB, PostgreSQL, etc.)
- Add login/authentication (NextAuth or JWT)
- Deploy frontend (Vercel) and backend (Render, Railway)
- Add CRUD functionality to user and task modules
- Enable file uploads and role-based access

---

> Built by **Adila Vahab** for learning, and practice.
