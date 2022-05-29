import { useState } from "react";

import Header from "./components/Header";
import Command from "./components/Command";
import "./styles/App.scss";

function App() {
  const [commands, setCommands] = useState([""]);

  return (
    <div className="App">
      <Header />

      {commands?.map((command) => (
        <Command command={command} />
      ))}
    </div>
  );
}

export default App;
