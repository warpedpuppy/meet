import React from 'react';
import './App.css';

class App extends React.Component {
  state = {code: ''}
  componentDidMount = () => {
    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams, urlParams.get("code"))
    // this.setState({code: urlParams.get("code")})

    this.testEndPoints();
  }

  async testEndPoints () {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    let code = urlParams.get("code");

    if (!code) {
      let result = await fetch('https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url');
      let resultJson = await result.json();
      let { authUrl } = resultJson;
      console.log(authUrl)
      const urlParams = new URLSearchParams(authUrl);
      console.log(urlParams)
      this.setState({code: urlParams.get("code")})
      window.location.href = authUrl;
    } else {
      console.log(code)
      let result = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/${code}`)
      let resultJson = await result.json();
      console.log("from token code", resultJson)

    }



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
