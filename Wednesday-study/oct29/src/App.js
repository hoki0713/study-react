import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "호정" },
      { id: "b", name: "양욱" },
      { id: "c", name: "진석" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      margin: "1rem",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                changeName={(event) =>
                  this.nameChangedHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonsHandler}>
          버튼
        </button>
        {persons}
      </div>
    );
  }
}

// function App() {
//   const [name, setName] = useState("Hojeong");

//   const nameChangeHandler = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div className="App">
//       <Person name={name} changeName={(event) => nameChangeHandler(event)} />
//     </div>
//   );
// }

export default App;
