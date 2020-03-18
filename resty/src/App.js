import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      apiurl: 'https://pokeapi.co/api/v2/pokemon/',
      restMethod: 'get',
      results: 'This is where the results of the api call go'
    }
  }
  makeAPICall = async () => {
    const raw = await fetch(this.state.apiurl);
    const data = await raw.json();
    this.setState({
      results: data.results
    })
  }
  handleChange = e => {
    this.setState({
      apiurl: e.target.value
    })
  }

render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RESTy</h1>
        </header>
          <div className="Form">
            <form>
              <input onChange={this.handleChange} type="text" id="apiurl" name="urlpath" placeholder="api url path"></input>
              <div className="RESTmethods">
                <span>GET</span><span>POST</span><span>PUT</span><span>DELETE</span>
                <button onClick={this.makeAPICall}>Go!</button>
              </div>
              <article className="results"></article>
            </form>
          </div>
        <footer>
          Codefellows JS 401d34 Lab 28 Kevin Dreyer
        </footer>
      </div>
    );
  }
}

export default App;
