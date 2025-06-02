import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
