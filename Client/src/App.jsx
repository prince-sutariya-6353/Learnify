import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <section className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Welcome to Learnify</h2>
                <p>Your learning journey starts here</p>
              </section>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
              <section className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                <p>Welcome to your dashboard!</p>
              </section>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
