import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Hello, Tailwind + React!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This is a basic React component styled with Tailwind CSS.
        </p>
        <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
