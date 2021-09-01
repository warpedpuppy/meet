import React from 'react';
import './App.css';

class App extends React.Component {
  state = {code: '', events: []}
  componentDidMount = () => {

    this.testEndPoints();
  }

  async testEndPoints () {

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    if (!code) {
      this.stepOne(code);
    } else {
      let access_token = await this.stepTwo();
      this.stepThree(access_token)
    }

  }

  async stepOne () {
    console.log("step one")
      let result = await fetch('https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url');
      let resultJson = await result.json();
      let { authUrl } = resultJson;

      const urlParams = new URLSearchParams(authUrl);
      
      this.setState({code: urlParams.get("code")})
      window.location.href = authUrl;
  }

  async stepTwo (code) {
    console.log("step two", code)

    if (decodeURIComponent(code) === code) {
        code = encodeURIComponent(code);
    }
    console.log("encoded code", code)

    let result = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/${code}`)
    let resultJson = await result.json();
    console.log("from token code", resultJson)

    const { access_token } = resultJson
    return access_token;

  }

  async stepThree (access_token) {
    let calendarCall = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${access_token}`);
    let calendarCallJSON = await calendarCall.json();
    console.log("final product = ", calendarCallJSON)
    this.setState({events: calendarCallJSON})
  }

  goToRoot = () => {
    window.location.href = window.location.origin;
  }
  render () {
    const { events } = this.state;
     return (
      <div className="App">
        <button onClick={this.goToRoot}>refresh</button>
        <hr />
        <h1>{this.state.code}</h1>
        <ul>
          {
            events.map( (item, i) => {
              return <li key={i}>{item.summary}</li>
            })
          }
        </ul>
        <hr />
      </div>
    );
  }
 
}

export default App;
