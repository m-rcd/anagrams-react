import React from 'react';

export default class Word extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          className="word"
          placeholder='Enter your word'
          required />
        <input
          type="submit"
          value="Submit"
           />
      </form>
    );
  }
}
