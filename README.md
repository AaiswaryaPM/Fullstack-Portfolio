# 🚀 Personal Developer Portfolio

A modern, fully responsive **developer portfolio website** built to showcase my projects, skills, and experience.  
It also includes interactive features like a **Word Scramble Game** and a fully functional **Contact System powered by email automation**.

---

## 🌐 Live Project

🔗 **[Aaiswarya PM](https://fullstack-portfolio-mu-puce.vercel.app/)**

---

## 📌 Features

- 🎨 Modern UI with responsive design
- 🌙 Dark / Light theme support
- ⚡ Smooth animations using Framer Motion
- 📂 Projects showcase section with live demos & GitHub links
- 🧠 Interactive **Word Scramble Game** (fun mini-game inside portfolio)
- 📬 Contact form with real-time email delivery
- 📩 Auto-response email system (user receives confirmation)
- 🔒 Secure backend API integration
- 📱 Fully mobile responsive

---

## 🧩 Word Scramble Game

This portfolio includes a **Word Scramble Game** as a personal interactive section to enhance user engagement.

### Features:
- Randomized word generation
- Score tracking system
- Timer-based challenge mode
- Simple and clean UI
- Built using vanilla JavaScript logic

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Resend Email API

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📬 Contact System

The contact form is fully functional and integrated with **Resend Email Service**.

### Workflow:
1. User submits message via contact form
2. Data is stored in MongoDB
3. Email is sent to the owner via Resend API
4. Auto-reply is sent to the user confirming receipt

---

## ⚙️ Environment Variables

Backend requires the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
