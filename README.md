# 🌟 Airbnb Booking Web App (MERN Stack)

A fully responsive and feature-rich Airbnb-inspired booking platform developed using the **MERN stack**. Users can register, list properties, search, and book stays seamlessly. Clean UI, secure backend, and smooth user experience — all in one place.

---

## ⚙️ Tech Stack

- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT, bcrypt
- **Deployment:** Render / Vercel / Netlify

---

## ✨ Key Features

- 🔐 **Authentication**: Secure user login & registration
- 🏘️ **Property Listings**: Create, edit, delete & browse properties
- 🔍 **Advanced Search**: Filter by location, price, and availability
- 🗓️ **Booking System**: Reserve stays with real-time availability
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 💳 **(Optional) Stripe Integration**: For real payments

---
▶️ Running the Backend (Server)

cd server
npm install        # Install dependencies
npm run dev          # Start backend on localhost:5000

---

.env file in /server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

▶️ Running the Frontend (Client)

cd client
npm install        # Install dependencies
npm run dev          # Start frontend on localhost:3000
