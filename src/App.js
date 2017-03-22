import React, { Component } from 'react';

const Board = ({ onClick }) => (
  <div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={onClick}
      >
        <p className="title has-text-centered">{display}</p>
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
  constructor(props) {
    super(props);
    this.state = {
      game: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
    };

    // Bind class methods to object instances
    // this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard() {}

  render() {
    return (
      <div>
        <div className="section column is-half is-offset-one-quarter">
          <Board onClick={() => this.updateBoard()} />
        </div>
      </div>
    );
  }
}

export default App;
