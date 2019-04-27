import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Kurac", counterId);
    const counters = this.state.counters.filter(k => k.id !== counterId);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(k => {
      k.value = 0;
      return k;
    });
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
