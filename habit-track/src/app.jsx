import React, { Component } from 'react';
import './app.css';
import Habits from './Components/habits';
import Navbar from './Components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
      ],
      text : "",
    };
  }
  handleIncrement = (habit) => {
    const habits = [...this.state.habits]
    const idx = habits.indexOf(habit)
    habits[idx].count = habits[idx].count + 1
    this.setState({ habits })
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const idx = habits.indexOf(habit)
    habits[idx].count = habits[idx].count <= 0 ? 0 : habits[idx].count - 1
    this.setState({ habits })
  };


  handleOnDelete = (habit) => {
    const habits = this.state.habits.filter(arr => arr.id != habit.id)
    this.setState({ habits })
  };

  textData = (text) => {
    const habits = [...this.state.habits, {id: Date.now(), name:text, count: 0}];
    this.setState({ habits })
  };

  handleReset = () => {
    const habits = [...this.state.habits]
    const newhabit = habits.map(item => item.count = 0 )
    this.setState({ newhabit })
  }
  render() {
    return (
      <ul>
        <Navbar totalCount={this.state.habits.filter(arr => arr.count > 0 ).length}/>
        <Habits habits={this.state.habits}
          textData={this.textData}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleOnDelete={this.handleOnDelete} />
        <button className="resetBtn" onClick={this.handleReset}>Reset</button>
      </ul>
    );
  }
}

export default App;