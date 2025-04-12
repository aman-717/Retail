import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Home.css";

function Home() {
  const navigateTo = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:4001/user/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("User logged out successfully");
      localStorage.removeItem("jwt");
      navigateTo("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.response?.data?.message || "Failed to logout User");
    }
  };

  return (
    <div className="logout-container">
      <button onClick={logout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Home;
