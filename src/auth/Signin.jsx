import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw"

    const storedEmail = localStorage.getItem("token","email");
    const storedName = localStorage.getItem("token","name");

    if (email === storedEmail && name === storedName) {
      console.log("Login successful");
      navigate("/main");
    } else {
      alert("Invalid email or name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)} // Corrected this line
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
