import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Leon",
      last: "S. Kennedy",
    },
    {
      first: "Ashley",
      last: "Graham",
    },
  ];

  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
};

export default App;
