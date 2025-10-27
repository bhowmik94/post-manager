# Post Manager (JWT Authenticated notes management app)

[![Frontend CI](https://github.com/bhowmik94/post-manager/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/bhowmik94/post-manager/actions/workflows/frontend-ci.yml)

💡 [Live Demo](https://note-pilot-ui.vercel.app/)

This is the UI of the JWT-authenticated CRUD app called NotePilot, for managing posts/notes.
This application serves as a playground for testing and learning the best practices while writing frontend codes, including automated tests, CI/CD piplelines etc.
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
