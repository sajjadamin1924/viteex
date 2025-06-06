import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import {  Password, Download1 } from "../assets/images";

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("userData");
    if (userToken) {
      navigate("/main");
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      if (
        parsed.email === formData.email &&
        parsed.password === formData.password
      ) {
        // Credentials match
        navigate("/main");
      } else {
        setError("Email or Password is incorrect");
      }
    } else {
      // No user found
      setError("No account found. Please sign up.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div className="mb-4 relative">
          <img src={Download1} alt="email" className="absolute left-3 top-3 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4 relative">
          <img src={Password} alt="password" className="absolute left-3 top-3 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
