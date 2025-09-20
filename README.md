# NexTalk - Video Calling Realtime Chat App & Social App

<div align="center">
   <img height="800" alt="Home Page1" src="https://github.com/user-attachments/assets/938a8312-f8f6-471c-a3f8-e1e259da6ad8" />

  <p><em>NexTalk is a secure and feature-rich communication platform offering real-time chat, video calling, and a seamless social experience.</em></p>
  
  [![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
</div>

## 🚀 Overview

NexTalk Chat App & Social App – NexTalk is a modern chat app with secure authentication, smooth onboarding, a friends system, real-time messaging, video calling, customizable themes, and reliable features built for seamless communication.

## ✨ Key Features

- **Secure Authentication**: Protects user accounts with JWT-based login and signup.
- **Seamless Onboarding**: Smooth first-time setup for a quick start.
- **Friends System**: Connect, manage, and interact with friends easily.
- **Real-Time Chat**: Instant messaging with reliable live updates.
- **Video Calling**: High-quality one-on-one video communication.
- **Customizable Themes**: Choose from 32 unique themes for a personalized look.
- **Protected Routes**: Ensures safe and restricted access across the app.
- **Deployment Ready**: Optimized for smooth hosting and scalability.


## 🛠️ Tech Stack

### Frontend

- **React 19**: Component-based UI development
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Hooks**: Handle state, side effects, and other functionalities
- **JWT Authentication**: Secure user authentication
- **Stream's platform**: Real-Time chat and video experience (https://getstream.io/)


### Backend

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Stream's platform**: Real-Time chat and video experience (https://getstream.io/)


### Tools

- **Vite**: Next-generation frontend tooling
- **ESLint**: Code quality and style checking
- **Render**: Frontend deployment and hosting
- **Git & GitHub**: Version control and collaboration

## 📸 Screenshots

<div align="center">
 
<img height="400" alt="SignIn Page" src="https://github.com/user-attachments/assets/4447854c-48a0-4ed0-afd3-9fe9b45a0c5c" />
<img height="400" alt="Home Page1" src="https://github.com/user-attachments/assets/938a8312-f8f6-471c-a3f8-e1e259da6ad8" />
<img height="400" alt="Notification Page" src="https://github.com/user-attachments/assets/1f80a047-b800-4470-b994-b8eee21f0b70" />
<img height="400" alt="Chat Page" src="https://github.com/user-attachments/assets/dc8f9525-2835-4844-b248-07f1882772b6" />
<img height="400" alt="VideoCall Page" src="https://github.com/user-attachments/assets/f2b94b7a-07a7-46c8-b60c-de0864096217" />

</div>

## 🌐 Live Demo

Experience NexTalk Video Calling Chat App in action: [https://nextalk-555.onrender.com/](https://nextalk-555.onrender.com/)

### Demo Accounts

- **Sender User**:
  - Email: duggu123@gmail.com
  - Password: Duggu@123
- **Receiver User**:
  - Email: sunil123@gmail.com 
  - Password: Sunil@123

## 📥 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Frontend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Pooja675/NexTalk.git
   ```
2. Navigate to the client directory
   ```bash
   cd NexTalk/frontend
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_STREAM_API_KEYL= your_stream_api_key
   ```
5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Open your browser and navigate to `http://localhost:5173`

### Backend Setup

1. Clone the backend repository
   ```bash
   git clone https://github.com/Pooja675/NexTalk.git
   ```
2. Navigate to the server directory
   ```bash
   cd zynkup/server
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string/or ask the repo owner for the URI
   PORT=5001
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   JWT_SECRET_KEY=your_jwt_secret_key
   NODE_ENV = production
   ```
5. Start the server
   ```bash
   npm start
   # or
   yarn start
   ```


## Note:

You might need to run both the client and server simultaneously for fetching data in your local machine.

## 📁 Project Structure

```
frontend/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI components
│   ├── contants/       # Contants
│   ├── hooks/          # Custom hooks 
│   ├── lib/            # Api-clients
│   ├── pages/          # Main application pages
│   ├── store/          # State management
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration

backend/
├── controllers/        # Request handlers
├── lib/                # Utility functions
├── middleware/         # Custom middleware
├── models/             # Database models
├── routes/             # API routes
└── server.js           # Server entry point

```
### 🎯 Result and Conclusion

 NexTalk delivers a seamless communication experience with secure authentication, real-time chat, video calling, and customizable themes in a modern social environment. A reliable, feature-rich, and deployment-ready application that showcases end-to-end full-stack development and real-time communication at scale.




