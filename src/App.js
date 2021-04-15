import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setColor] = useState("red");
  const [disabled, setDisable] = useState(false);

  const setNewColor = () => {
    setColor(btnColor === "red" ? "blue" : "red");
  };

  const disableBtn = () => {
    setDisable(!disabled);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: btnColor }}
        onClick={setNewColor}
        className="btn"
        disabled={disabled}
      >
        Change to blue
      </button>

      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={disableBtn}
      />
    </div>
  );
}

export default App;
