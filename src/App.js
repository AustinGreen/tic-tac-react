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
        <p className="title has-text-centered">{gameState[0][0] ? gameState[0][0] : '\u00A0'}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(0, 1)}
      >
        <p className="title has-text-centered">{gameState[0][1] ? gameState[0][1] : '\u00A0'}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(0, 2)}
      >
        <p className="title has-text-centered">{gameState[0][2] ? gameState[0][2] : '\u00A0'}</p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 0)}
      >
        <p className="title has-text-centered">
          {gameState[1][0] ? gameState[1][0] : '\u00A0'}
        </p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 1px 0' }}
        onClick={() => onClick(1, 1)}
      >
        <p className="title has-text-centered">{gameState[1][1] ? gameState[1][1] : '\u00A0'}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 0 1px 0' }}
        onClick={() => onClick(1, 2)}
      >
        <p className="title has-text-centered">{gameState[1][2] ? gameState[1][2] : '\u00A0'}</p>
      </div>
    </div>
    <div className="columns is-mobile">
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 0)}
      >
        <p className="title has-text-centered">{gameState[2][0] ? gameState[2][0] : '\u00A0'}</p>
      </div>
      <div
        className="column is-4 Board__square"
        style={{ borderWidth: '0 1px 0 0' }}
        onClick={() => onClick(2, 1)}
      >
        <p className="title has-text-centered">{gameState[2][1] ? gameState[2][1] : '\u00A0'}</p>
      </div>
      <div className="column is-4 Board__square" onClick={() => onClick(2, 2)}>
        <p className="title has-text-centered">{gameState[2][2] ? gameState[2][2] : '\u00A0'}</p>
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
    };

    // Bind class methods to object instances
    this.updateBoard = this.updateBoard.bind(this);
    this.beginGame = this.beginGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidUpdate() {
    const { game } = this.state;
    if (
      (game[0][0] && game[0][1] && game[0][2] === 'X') ||
      (game[1][0] && game[1][1] && game[1][2] === 'X') ||
      (game[2][0] && game[2][1] && game[2][2] === 'X') ||
      (game[0][0] && game[1][0] && game[2][0] === 'X') ||
      (game[0][1] && game[1][1] && game[2][1] === 'X') ||
      (game[0][2] && game[1][2] && game[2][2] === 'X') ||
      (game[0][0] && game[1][1] && game[2][2] === 'X') ||
      (game[0][2] && game[1][1] && game[2][0] === 'X')
    ) {
      this.endGame();
    }
    // this.setState({ searchKey: searchTerm });
    // commented this out in favor of defaulting searchKey to DEFAULT_QUERY
  }

  updateBoard(row, col) {
    const { game, currentTurn } = this.state;
    if (game[row][col].length) return;
    game[row][col] = currentTurn;
    this.setState({
      game,
      currentTurn: currentTurn === 'X' ? 'O' : 'X',
    });
  }

  beginGame() {
    this.setState({
      hasGameBegun: true,
    });
  }

  endGame() {
    console.log('game over, x won!');
  }

  render() {
    const {
      game,
      hasGameBegun,
      currentTurn,
    } = this.state;
    return (
      <div>
        <div className="section column is-half is-offset-one-quarter has-text-centered">
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
