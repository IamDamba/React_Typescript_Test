import Greet from "./components/greet/Greet";
import Person from "./components/person/Person";
import PersonList from "./components/person/PersonList";
import Status from "./components/status/Status";
import Heading from "./components/heading/Heading";
import Oscar from "./components/oscar/Oscar";

const App = () => {
  // const personName = {
  //   first: "David",
  //   second: "Willson",
  // };

  // const personList = [
  //   {
  //     first: "David",
  //     last: "Willson",
  //   },
  //   {
  //     first: "Leo",
  //     last: "Calteron",
  //   },
  //   {
  //     first: "Trevor",
  //     last: "Munkole",
  //   },
  // ];

  return (
    <div className="App">
      {/* 
      <Person name={personName} />
      <PersonList names={personList} /> */}
      <Status status="loading" />
      <Heading>Hello There !</Heading>
      <Oscar>
        <Heading>Oscar goes to DiCaprio</Heading>
      </Oscar>
      <Greet name="Aris" isLoggedIn={false} />
    </div>
  );
};

export default App;
