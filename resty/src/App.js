import React from 'react';
import './App.css';

function Form() {
  return (
    <div className="Form">
      <form>
        <input type="text" id="apiurl" name="urlpath" value="apiurl"></input>
        <div className="RESTmethods">
          <span>GET</span><span>POST</span><span>PUT</span><span>DELETE</span>
          <button>Go!</button>
        </div>
      </form>
      <article className="results"></article>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RESTy</h1>
      </header>
      <Form />
      <footer>
        Codefellows JS 401d34 Lab 28 Kevin Dreyer
      </footer>
    </div>
  );
}

export default App;
