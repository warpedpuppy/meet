import React from 'react';
import './App.css';

class App extends React.Component {
  state = {code: ''}
  componentDidMount = () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams)
    this.setState({code: urlParams.get("code")})
  }
  render () {
     return (
      <div className="App">
        <hr />
        <h1>{this.state.code}</h1>
        <hr />
      </div>
    );
  }
 
}

export default App;
