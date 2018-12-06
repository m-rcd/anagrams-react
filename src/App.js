import React from 'react';
import './App.css';
import Word from './components/wordForm'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
          Anagrams
        </p>
        </header>
        <div className="word">
          <Word />
        </div>
      </div>
    );
  }
}
