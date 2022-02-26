import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count:1
  };
  handleClick = () => {
    this.setState(({count}) => ({count:count+1}));
  };
  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <br></br>
        <button id="inc" onClick={this.handleClick}>incrementar</button>
      </div>
    );
  }
}

export default App;
