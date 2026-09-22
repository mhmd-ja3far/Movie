# Movie Vault | React Discovery App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

> A modern, data-driven React application that leverages the TMDB API for movie discovery and Appwrite BaaS to track real-time trending search metrics.

🔗 **[View Live Demo](https://movie-two-lovat.vercel.app/)** | 📂 **[Explore Source Code](https://github.com/Mo7ammed-Ja3far/Movie)** 

---

## 📖 Project Overview
**Movie Vault** is designed to provide a seamless movie browsing experience. Unlike standard API-fetching apps, this project implements a custom **Trending Algorithm**. Every time a user searches for a movie, the search query and movie data are logged and updated within an **Appwrite cloud database**. This data is then aggregated to display the top 5 trending movies in real-time.

---

## ✨ Key Features
- **Dynamic Data Fetching:** Seamless integration with the TMDB API to discover movies and search the database.
- **Backend Integration (BaaS):** Utilizes Appwrite's database and SDK to store search metrics and track trending movies globally.
- **Search Optimization:** Implemented **Debouncing** (via `react-use`) on the search input to delay API calls by 500ms, drastically reducing server load and preventing rate-limiting.
- **Modern UI Architecture:** Built with **Tailwind CSS v4**, featuring custom theme configurations, gradients, and a responsive grid system.
- **Error & Loading Handling:** Robust state management to handle loading spinners, empty states, and API error messages gracefully.

---

## 🛠️ Tech Stack & Tools
- **Frontend Framework:** React (v19) built with Vite
- **Styling:** Tailwind CSS v4
- **Backend Services:** Appwrite (Database & Document Management)
- **External API:** TMDB (The Movie Database)
- **State Management & Hooks:** React Hooks (`useState`, `useEffect`), `react-use` (useDebounce)

---

## 🧠 Key Learnings
Building this application pushed my skills from static development into dynamic software engineering. I learned how to:
1. Handle side-effects and asynchronous data fetching properly inside React's `useEffect` hook.
2. Initialize and interact with a Backend-as-a-Service (Appwrite SDK) to create, update, and query database documents.
3. Optimize application performance using Debounce techniques to control the frequency of state updates and API requests.
4. Securely manage sensitive API keys and Project IDs using environment variables (`.env`).

---

## 🚀 Getting Started

To run this project locally, you will need Node.js installed, as well as accounts with TMDB and Appwrite to obtain API keys.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Mo7ammed-Ja3far/Movie.git](https://github.com/Mo7ammed-Ja3far/Movie.git)
   cd Movie

 


3. **Set up Environment Variables:**
Create a `.env.local` file in the root directory and add your keys:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id

```


4. **Run the development server:**
```bash
npm run dev

```
