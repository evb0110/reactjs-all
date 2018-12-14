import React from "react";
import ReactDOM from "react-dom";
import EditableButton from "./Components/EditableButton";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <EditableButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
