import React from 'react';
import './App.css';

class App extends React.Component {
  state = {code: '', events: [], error: ''}
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
	  console.log(authUrl)
      window.location.href = authUrl;

    } else {
		
      if (decodeURIComponent(code) === code) {
          code = encodeURIComponent(code);
      }
	  console.log('get code ', code);
      let result = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/${code}`)
      let resultJson = await result.json();

	  console.log('get token call result', resultJson);


      const { access_token } = resultJson;
      let calendarCall = await fetch(`https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${access_token}`);
      let calendarCallJSON = await calendarCall.json();

	  console.log("calendar", calendarCall)
	  console.log("errors", calendarCallJSON.errors)


      if (calendarCallJSON.errors) {
		this.setState({error: calendarCallJSON.errors.message})
        // this.goToRoot();
      } else {
        this.setState({events: calendarCallJSON.events})
      }
    }
  }

  goToRoot = () => {
    window.location.href = `${window.location.origin}/meet/`;
  }

  

  render () {
    const { events, error } = this.state;

	if (error) {
		return (
			<div className="App">
				<h1>error: { error }</h1>
			</div>
		)
	}

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
