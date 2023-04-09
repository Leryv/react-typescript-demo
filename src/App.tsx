import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const App = () => {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => console.log(`Button Has Clicked ${id}`)}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};

export default App;
