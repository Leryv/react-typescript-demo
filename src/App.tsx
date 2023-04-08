import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

const App = () => {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Heading Page</Heading>
      <Oscar>
        <Heading>Heading Page</Heading>
      </Oscar>
      <Greet name="Andika" isLoggedIn={true} />
    </div>
  );
};

export default App;
