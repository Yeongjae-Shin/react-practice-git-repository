import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  state = {
    persons: [
      { name: "Sooyeon", age: 28 },
      { name: "Jeonghyeon", age: 34 },
      { name: "Jeonghoon", age: 32 },
    ],
  };

  switchNameHandler = () => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        { name: "Sooyeon Song", age: 28 },
        { name: "Jeonghyeon Park", age: 34 },
        { name: "Jeonghoon Park", age: 32 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App! </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobby is Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
