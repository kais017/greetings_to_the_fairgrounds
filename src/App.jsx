import React from "react";
import Greetings from "./components/Greetings";

function App() { 
  return (
    <div>
      <h1>Hello from the App Component!</h1>
      <p>This is your first custom component in React.</p>
      <Greetings name="Paul!" />
    </div>
  );
};

export default App;