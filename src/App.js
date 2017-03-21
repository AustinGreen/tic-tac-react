import React, { Component } from 'react';

const Board = () => (
  <div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>O</a>
      </div>
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>X</a>
      </div>
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 0 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>O</a>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>X</a>
      </div>
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>O</a>
      </div>
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 0 1px 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>X</a>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 0 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>O</a>
      </div>
      <div
        className="column is-4 Board__square has-text-centered"
        style={{ borderWidth: '0 1px 0 0' }}
      >
        <a className="title" onClick={() => console.log('X')}>X</a>
      </div>
      <div className="column is-4 Board__square has-text-centered">
        <a className="title" onClick={() => console.log('X')}>X</a>
      </div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="section column is-half is-offset-one-quarter">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
