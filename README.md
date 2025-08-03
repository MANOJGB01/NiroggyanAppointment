# NirogGyan Frontend Assignment

A responsive healthcare appointment booking web application built using React.js and static data. This app allows users to explore doctor profiles, check availability, and book appointments in a simple, intuitive interface.

---

## 📌 Objective

Build a user-friendly and responsive frontend interface to:

- View a list of doctors
- Display detailed doctor profiles
- Book appointments via a form
- View booked appointment history

---

## 🚀 Tech Stack

- **Frontend**: React.js (JavaScript)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: CSS3
- **Backend**: None — uses **static data** for doctors

---

## 🔧 Features

### ✅ Landing Page
- Displays a list of doctors using mock data
- Shows:
  - Doctor name
  - Specialization
  - Profile image
  - Availability status (e.g., “Available Today”, “Fully Booked”)
- Includes a **search bar** to filter doctors by **name** or **specialization**

### ✅ Doctor Profile Page
- Click a doctor to view more details
- Displays:
  - Detailed information
  - Availability schedule
  - **“Book Appointment”** button

### ✅ Appointment Booking
- Booking form opens in a popup/modal
- Collects:
  - Patient name
  - Email
  - Desired date & time
- On submission:
  - Shows a confirmation message
  - Stores appointment data in **React Context**

### ✅ Appointment History
- Displays a list of previously booked appointments
- Includes a **“Clear All”** button

---

📝 Notes
This project uses static JSON to simulate backend data responses.

No real API calls — doctor data is stored only static data not API's.

Appointment data is managed in-memory via Context API (not persisted).
