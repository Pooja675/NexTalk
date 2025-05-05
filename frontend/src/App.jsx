import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotificationPage from "./pages/NotificationPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";
import OnboardingPage from "./pages/OnboardingPage"
import toast, {Toaster} from "react-hot-toast"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { axiosInstance } from "./lib/axios";

const App = () => {

  const {data, isLoading, error} = useQuery({

      queryKey: ["todos"],

      queryFn: async () => {
        const res = await axiosInstance.get("/auth/me")
        return res.data;
      },
      retry: false
 })

  console.log(data)
  // console.log({isLoading})
  // console.log({error})


  return (
    <div className="h-screen" data-theme="night">
      <button onClick={() => toast.success("Hello World!!")}>Create a toast</button>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/notifications" element={<NotificationPage />}/>
          <Route path="/call" element={<CallPage />}/>
          <Route path="/chat" element={<ChatPage />}/>
          <Route path="/onboarding" element={<OnboardingPage />}/>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
