import React from "react";
import Counter from "./components/Counter";
import './App.css';


function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple React Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;
