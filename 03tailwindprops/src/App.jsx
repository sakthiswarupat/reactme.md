import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // Example state (not used here, but you can add counters etc.)
  const [count, setCount] = useState(0);

  // Example array
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="min-h-screen bg-green-500 p-6">
      <h1 className="text-3xl p-3 rounded-md text-white mb-6">
      Vite with Tailwind
      </h1>
      <Card username="sakthi" myArr={newArr} />
      <Card username="sakthi" post="Staff Engg." />
    </div>


  );
}

export default App;
