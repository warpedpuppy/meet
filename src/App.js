import React from 'react';
import './App.css';

class App extends React.Component {
  state = {code: '', events: []}
  componentDidMount = () => {

    this.testEndPoints();
  }

  async testEndPoints () {

    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);

    let code = urlParams.get("code");

    if (!code) {

      let result = await fetch('https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url');
      let resultJson = await result.json();
      let { authUrl } = resultJson;
      window.location.href = authUrl;

    } else {
 
      if (decodeURIComponent(code) === code) {
          code = encodeURIComponent(code);
      }
      let result = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/${code}`)
      let resultJson = await result.json();

      const { access_token } = resultJson

      console.log(access_token)
     
    }
  }

  goToRoot = () => {
    window.location.href = `${window.location.origin}/meet/`;
  }

  render () {
    const { events } = this.state;
     return (
      <div className="App">
        <button onClick={this.goToRoot}>refresh</button>
        <hr />
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
