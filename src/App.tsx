import "./App.css";
import { Greet } from "./components/Greet";

const App = () => {
  return (
    <div className="App">
      <Greet name="Andika" messageCount={20} isLoggedIn={true} />
    </div>
  );
};

export default App;
