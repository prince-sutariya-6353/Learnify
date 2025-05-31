import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
      <p>{message || "Loading..."}</p>
    </section>
  );
}

export default App;
