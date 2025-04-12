import React from "react";
import Home from "./componenets/Home";
import SignUp from "./componenets/SignUp";
import Login from "./componenets/Login";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./componenets/PageNotFound";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
