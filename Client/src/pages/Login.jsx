import React from "react";
import { useState } from "react";
import api from "../api/axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await api.post(process.env.REACT_APP_LOGIN_ENDPOINT, form);
      const res = await api.post("/auth/login", form);
      alert(`Welcome ${res.data.user.name}`);
    } catch (err) {
      // alert(err.response?.data?.msg || process.env.REACT_APP_LOGIN_ERROR_MESSAGE || "Login failed");
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
      </form>
    </div>
  );
}

export default Login;