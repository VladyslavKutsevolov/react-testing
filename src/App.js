import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { useState } from "react";
import { OrderDetailsProvider } from "./context/orderDetails";

// export function replaceCamelCase(colorName) {
//   return colorName.replace(/\B([A-Z])\B/g, " $1");
// }

// function App() {
//   const [btnColor, setColor] = useState("red");
//   const [disabled, setDisable] = useState(false);
//
//   const setNewColor = () => {
//     setColor(btnColor === "red" ? "blue" : "red");
//   };
//
//   const disableBtn = () => {
//     setDisable(!disabled);
//   };
//
//   return (
//     <div className="App">
//       <button
//         style={{ backgroundColor: disabled ? "grey" : btnColor }}
//         onClick={setNewColor}
//         className="btn"
//         disabled={disabled}
//       >
//         Change to blue
//       </button>
//       <label htmlFor="checkbox">disabled button</label>
//       <input
//         type="checkbox"
//         name="disabled button"
//         id="checkbox"
//         onChange={disableBtn}
//       />
//     </div>
//   );
// }

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
