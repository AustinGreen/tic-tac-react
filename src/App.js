import React, { Component } from 'react';

const Board = ({ onClick, gameState }) => (
  <div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(0, 0)}
      >
        <p className="title has-text-centered">{gameState[0][0]}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(0, 1)}
      >
        <p className="title has-text-centered">{gameState[0][1]}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(0, 2)}
      >
        <p className="title has-text-centered">{gameState[0][2]}</p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 0)}
      >
        <p className="title has-text-centered">
          {gameState[1][0]}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 1)}
      >
        <p className="title has-text-centered">{gameState[1][1]}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(1, 2)}
      >
        <p className="title has-text-centered">{gameState[1][2]}</p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 0)}
      >
        <p className="title has-text-centered">{gameState[2][0]}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 1)}
      >
        <p className="title has-text-centered">{gameState[2][1]}</p>
      </div>
      <div className="column is-4 Board__square" onClick={() => onClick(2, 2)}>
        <p className="title has-text-centered">{gameState[2][2]}</p>
      </div>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [['', '', ''], ['', '', ''], ['', '', '']],
      currentTurn: 'X',
    };

    // Bind class methods to object instances
    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard(row, col) {
    const { game, currentTurn } = this.state;
    if (game[row][col].length) return;
    game[row][col] = currentTurn;
    this.setState({
      game,
      currentTurn: currentTurn === 'X' ? 'O' : 'X',
    });
    console.log(game);
  }

  render() {
    const {
      game,
    } = this.state;
    return (
      <div>
        <div className="section column is-half is-offset-one-quarter">
          <Board gameState={game} onClick={(row, col) => this.updateBoard(row, col)} />
        </div>
      </div>
    );
  }
}

export default App;
