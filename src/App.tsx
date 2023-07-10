import React from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import SmartInout from "./components/TicTacToe/SmartInput/SmartInput";
import SmartInput from "./components/TicTacToe/SmartInput/SmartInput";
import Products from "./Products/Products";

function App() {
  const frutis = ["apple", "kurut", "chalap", "kymyz"];
  const n = 1;
  return (
    <div>
      {/* <TicTacToe /> */}
      <Products />
      {/* <SmartInput /> */}
    </div>
  );
}

export default App;
