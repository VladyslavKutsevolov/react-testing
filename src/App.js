import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setColor] = useState("red");

  const setNewColor = () => {
    setColor(btnColor === "red" ? "blue" : "red");
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: btnColor }}
        onClick={setNewColor}
        className="btn"
      >
        Change to blue
      </button>
    </div>
  );
}

export default App;
