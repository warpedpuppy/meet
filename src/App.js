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
    
    const urlParams = new URLSearchParams(queryString);

    let code = urlParams.get("code");

    if (!code) {
      console.log("step one")
      let result = await fetch('https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url');
      let resultJson = await result.json();
      let { authUrl } = resultJson;

      const urlParams = new URLSearchParams(authUrl);
      
      this.setState({code: urlParams.get("code")})
      window.location.href = authUrl;

    } else {
      console.log("step two", code)

      if (decodeURIComponent(code) === code) {
          code = encodeURIComponent(code);
      }
      console.log("encoded code", code)

      let result = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/${code}`)
      let resultJson = await result.json();
      console.log("from token code", resultJson)

      const { access_token } = resultJson
      //

      let calendarCall = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${access_token}`);
      let calendarCallJSON = await calendarCall.json();
      console.log("final product = ", calendarCallJSON)

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