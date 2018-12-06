import React from 'react';
import Anagrams from './anagram'

export default class Word extends React.Component {
  constructor(props) {
  super(props);
  this.state = { word: '' }
  this.updateWord = this.updateWord.bind(this)
}

updateWord = (e) => {
  e.preventDefault();
  this.setState({
    word: e.target.value
  })
}

  render() {
    return (
      <form>
        <input
          type="text"
          className="word"
          placeholder='Enter your word'
          onChange={this.updateWord}
          required />
      <Anagrams />
      </form>
    );
  }
}
