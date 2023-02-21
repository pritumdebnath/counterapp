
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import StartNum from './components/StartNum';
import Reset from './components/Reset';

class App extends Component{
  state = {
    count: 0
  }

  incrementUp = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }

  decrementDown = () => {
    this.setState(
      {count: this.state.count - 1}
    )
  }

  startNum = (number) => {
    let value = parseInt(number)
    this.setState(
      {count: this.state.count + value}
    )
  }

  minusNum = (number) => {
    let value = parseInt(number)
    this.setState(
      {count: this.state.count - value}
    )
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <p>Counter App</p>
        </div>
        <div className="containertwo">
          <h1>{this.state.count}</h1>
        </div>
        <div className="containerthree">
          <Increment incrementUp={this.incrementUp} />
          <Decrement decrementDown={this.decrementDown} />
        </div>
        <div className="containerfour">
          <StartNum startNum={this.startNum} />
        </div>
        <div className="containerfive">
          <Reset reset={this.reset} />
        </div>
      </div>
    )
  }
}

export default App;
