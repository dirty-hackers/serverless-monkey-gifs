import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {};
    axios.get(process.env.getRandomMonkeyEndpoint).then((response) => {
      console.log(response)
      this.setState({
        gifUrl: response.data.url
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.gifUrl} alt=""/>
      </div>
    );
  }
}

export default App;
