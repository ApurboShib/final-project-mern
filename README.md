# ProFast - Final Project (MERN)

A full-stack MERN project built with React, Vite, Tailwind CSS, and DaisyUI.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, Vite 7 |
| Styling | Tailwind CSS 4, DaisyUI 5 |
| Routing | React Router 7 |
| Linting | ESLint 9 |

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, JSON data)
│   ├── banner/
│   ├── brands/
│   └── warehouses.json
├── layouts/         # Layout components
│   └── RootLayouts.jsx
├── pages/           # Page components
│   ├── home/
│   │   └── Home.jsx
│   └── shared/      # Shared/reusable components
│       ├── footer/
│       │   └── Footer.jsx
│       ├── Navbar/
│       │   └── Navbar.jsx
│       └── ProFastLogo/
│           └── ProFastLogo.jsx
├── router/          # App routing configuration
│   └── router.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## ✅ Progress Tracker

### Completed Features
- [x] Project setup with Vite + React
- [x] Tailwind CSS & DaisyUI configuration
- [x] React Router setup with RootLayout
- [x] Navbar component (responsive with mobile menu)
- [x] Footer component
- [x] ProFastLogo component
- [x] Home page structure
- [x] Navigation links (Home, About Us)

### In Progress
- [ ] About Us page
- [ ] Add more pages/routes

### Planned Features
- [ ] Backend API (Node.js + Express)
- [ ] MongoDB database integration
- [ ] User authentication
- [ ] Product/Warehouse listing
- [ ] CRUD operations
- [ ] Responsive design improvements

---

## 📝 Development Log

| Date | Task | Status |
|------|------|--------|
| Jan 26, 2026 | Initial project setup | ✅ Done |
| Jan 26, 2026 | Added Tailwind & DaisyUI | ✅ Done |
| Jan 26, 2026 | Created Navbar, Footer, Logo components | ✅ Done |
| Jan 26, 2026 | Set up React Router with layouts | ✅ Done |
| | | |

---

## 📌 Notes & Reminders

- Update this README as you complete tasks
- Add new features to the "Planned Features" section
- Move completed items from "In Progress" to "Completed Features"
- Log important changes in the "Development Log" table

---

## 🔗 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing/Home page |
| `/about` | About Us | About page (pending) |

---

## 📦 Dependencies

**Production:**
- react, react-dom
- react-router
- tailwindcss, @tailwindcss/vite

**Development:**
- vite, @vitejs/plugin-react
- eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- daisyui
