import React from "react";
import { useState } from "react";
import api from "../api/axios";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await api.post(`${process.env.REACT_APP_SIGNUP_ENDPOINT}/auth/signup`, form);
      const res = await api.post("/auth/signup", form);
      alert("Signup successful!");
    } catch (err) {
      alert("Signup failed!");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 shadow-md rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input name="name" placeholder="Name" className="block w-full mb-2 p-2 border" onChange={handleChange} />
      <input name="email" placeholder="Email" className="block w-full mb-2 p-2 border" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="block w-full mb-2 p-2 border" onChange={handleChange} />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
    </form>
  );
}

export default Signup;
