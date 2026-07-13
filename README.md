# Parmjeet Singh — Full Stack Portfolio

Premium full-stack developer portfolio with Next.js frontend and Express + MongoDB backend.

## Project Structure

```
portfolio/
├── frontend/   # Next.js (App Router, Tailwind, Framer Motion)
└── backend/    # Node.js + Express + MongoDB
```

## Quick Start

### 1. Install dependencies

```bash
npm run install:all
npm install
```

### 2. Environment setup

**Backend** — copy and edit `backend/.env`:

```bash
cp backend/.env.example backend/.env
```

By default `USE_MEMORY_DB=true` runs a **local in-memory MongoDB** — no Atlas setup needed for development.

For production, set `USE_MEMORY_DB=false` and add your MongoDB Atlas URI.

**Frontend** — `frontend/.env.local` is already configured:

```
NEXT_PUBLIC_API_URL=http://localhost:6000/api
```

### 3. Run both frontend & backend

```bash
npm run dev
```

| Service  | URL                        |
|----------|----------------------------|
| Frontend | http://localhost:3000      |
| Backend  | http://localhost:6000      |
| Admin    | http://localhost:3000/admin |

### Admin Login (default)

- **Email:** `parmjeet7438@gmail.com`
- **Password:** `admin123`

## Features

- Animated portfolio sections (Hero, Skills, Training, Certifications, Projects, etc.)
- Dark / Light theme with localStorage persistence
- JWT-protected admin dashboard
- Contact form with MongoDB storage + email (Nodemailer)
- Samsung Innovation Campus certification display
- GitHub activity section
- Visitor analytics & resume download tracking
- Cloudinary image upload (admin)

## API Endpoints

- `GET /api/health` — Health check
- `GET /api/projects` — List projects
- `POST /api/contact` — Submit contact form
- `POST /api/auth/login` — Admin login
- See `backend/src/routes/` for full API list

## Add Your Resume

Place your PDF at:

```
frontend/public/resume/parmjeet-singh-resume.pdf
```

## Tech Stack

**Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, Shadcn UI

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Cloudinary, Nodemailer

## Author

**Parmjeet Singh** — [GitHub](https://github.com/parmjeet7438-bit) · [LinkedIn](https://www.linkedin.com/in/parmjeet-singh-17b713397)
