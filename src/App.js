import React, { Component } from 'react';

const Board = ({ onClick, gameState, currentTurn }) => (
  <div>
    <div className="section">
      <div className="notification">
        <strong>Player {currentTurn}.</strong> It is your turn.
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(0, 0)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[0][0] ? gameState[0][0] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(0, 1)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[0][1] ? gameState[0][1] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(0, 2)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[0][2] ? gameState[0][2] : '\u00A0'}
        </p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 0)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[1][0] ? gameState[1][0] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 1)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[1][1] ? gameState[1][1] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(1, 2)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[1][2] ? gameState[1][2] : '\u00A0'}
        </p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 0)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[2][0] ? gameState[2][0] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 1)}
      >
        <p className="title is-1 has-text-centered">
          {gameState[2][1] ? gameState[2][1] : '\u00A0'}
        </p>
      </div>
      <div className="column is-4 Board__square" onClick={() => onClick(2, 2)}>
        <p className="title is-1 has-text-centered">
          {gameState[2][2] ? gameState[2][2] : '\u00A0'}
        </p>
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
      hasGameBegun: false,
      mostRecentSquare: {
        row: null,
        col: null,
      },
    };

    // Bind class methods to object instances
    this.updateBoard = this.updateBoard.bind(this);
    this.beginGame = this.beginGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidUpdate() {
    const { game, mostRecentSquare } = this.state;
    if (true) this.endGame();
  }

  updateBoard(row, col) {
    const { game, currentTurn } = this.state;
    if (game[row][col].length) return;
    game[row][col] = currentTurn;
    this.setState({
      game,
      currentTurn: currentTurn === 'X' ? 'O' : 'X',
      mostRecentSquare: {
        row,
        col,
      },
    });
  }

  beginGame() {
    this.setState({
      hasGameBegun: true,
    });
  }

  endGame() {
    const { mostRecentSquare } = this.state;
    console.log('row', mostRecentSquare.row, mostRecentSquare.col);
  }

  render() {
    const {
      game,
      hasGameBegun,
      currentTurn,
    } = this.state;
    return (
      <div>
        <div
          className="section column is-12-mobile is-half-desktop is-offset-one-quarter-desktop has-text-centered"
        >
          {hasGameBegun
            ? <Board
              currentTurn={currentTurn}
              gameState={game}
              onClick={(row, col) => this.updateBoard(row, col)}
            />
            : <a className="button is-success" onClick={() => this.beginGame()}>New Game</a>}
        </div>
      </div>
    );
  }
}

export default App;
