# Post Manager (JWT Authenticated CRUD App)

[![Frontend CI](https://github.com/bhowmik94/post-manager/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/bhowmik94/post-manager/actions/workflows/frontend-ci.yml)

This is a JWT-authenticated CRUD app for managing posts/notes.  
The frontend is built with React and Vite.  
API calls are handled by a separate Node.js + MongoDB backend.

## Features

- User authentication with JWT
- Create, read, update, and delete posts/notes
- Responsive UI built with React
- API integration with Node.js and MongoDB backend

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Run tests:**
   ```sh
   npm run test
   ```

## Project Structure

- `src/` — React frontend code
- `src/__tests__/` — Vitest test files
- `.github/workflows/frontend-ci.yml` — GitHub Actions CI workflow

## Backend

The backend (Node.js + MongoDB) is in a separate repository and handles authentication and CRUD API endpoints.

---

**Feel free to fork or contribute!**
