# 💱 Fullstack Currency Converter

A fullstack currency converter application built with:

- ⚡ FastAPI (Python)
- 🐳 Docker
- ⚛️ React + TypeScript (Vite)

This project converts currencies in real time using a public exchange rate API.

---

## 🚀 Tech Stack

### Backend
- FastAPI
- Uvicorn
- Requests
- Docker

### Frontend
- React
- TypeScript
- Vite

---

## 📦 Project Structure
```bash
currency-converter-fullstack/
│
├── backend/
│ ├── main.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── index.html
│ └── package.json
│
└── README.md
```
---

## ▶️ Running Locally (Docker Backend)


### 1️⃣ Build backend image
```bash
docker build -t currency-converter-backend ./backend
```

### 2️⃣ Run backend
```bash
docker run -d -p 8000:8000 --name currency-backend currency-converter-backend
```

Backend will run at:
```bash
http://localhost:8000
```
---

## ▶️ Run Frontend
Inside frontend folder:
```bash
npm install
```

```bash
npm run dev
```

Frontend runs at:
```bash
http://localhost:5173
```
---

## 📌 Features

- Real-time currency conversion
- Dockerized backend
- Modern React frontend
- TypeScript support
- CORS configured
- Clean project structure

## 📄 License

This project is for portfolio and educational purposes.
