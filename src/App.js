/* eslint-disable */
import React, { Component } from 'react';

const Board = ({ onClick, gameState, hasGameEnded, currentTurn, newGame }) => {
  let winner = currentTurn === 'X' ? 'O' : 'X';
  return (
    <div>
      <div className="section">
        {hasGameEnded
          ? <div className="notification">
              Congratulations <strong>Player {winner}</strong> You won. 🎉🎉🎉<br />
              <a className="button is-success is-outlined margin-top-20" onClick={newGame}>
                Play again?
              </a>
            </div>
          : <div className="notification">
              <strong>Player {currentTurn}.</strong> It is your turn.
            </div>}
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
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [['', '', ''], ['', '', ''], ['', '', '']],
      currentTurn: 'X',
      hasGameBegun: false,
      hasGameEnded: false,
      mostRecentSquare: {
        row: null,
        col: null,
      },
      turnNumber: 0,
    };

    // Bind class methods to object instances
    this.updateBoard = this.updateBoard.bind(this);
    this.beginGame = this.beginGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidUpdate() {
    const { game, mostRecentSquare, hasGameEnded, turnNumber, currentTurn } = this.state;
    if (turnNumber < 3 || hasGameEnded) return;

    if (mostRecentSquare.row === 0 && mostRecentSquare.col === 0) {
      if (game[0][1] === game[0][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[1][0] === game[2][0]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[1][1] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }

    if (mostRecentSquare.row === 0 && mostRecentSquare.col === 1) {
      if (game[0][0] === game[0][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[1][1] === game[2][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }

    if (mostRecentSquare.row === 0 && mostRecentSquare.col === 2) {
      if (game[0][0] === game[0][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[1][2] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][2]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[1][1] === game[2][0]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }

    if (mostRecentSquare.row === 1 && mostRecentSquare.col === 0) {
      if (game[1][1] === game[1][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][0] === game[2][0]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }

    if (mostRecentSquare.row === 1 && mostRecentSquare.col === 1) {
      if (game[1][0] === game[1][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][1] === game[2][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][0] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][2] === game[2][0]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][2]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }

    if (mostRecentSquare.row === 1 && mostRecentSquare.col === 2) {
      if (game[1][0] === game[1][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[1][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][2] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][2]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }
    if (mostRecentSquare.row === 2 && mostRecentSquare.col === 0) {
      if (game[2][1] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[2][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][0] === game[1][0]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][2] === game[1][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][2]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }
    if (mostRecentSquare.row === 2 && mostRecentSquare.col === 1) {
      if (game[2][0] === game[2][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[2][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][1] === game[1][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][1]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }
    if (mostRecentSquare.row === 2 && mostRecentSquare.col === 2) {
      if (game[2][0] === game[2][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[2][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][2] === game[1][2]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][2]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
      if (game[0][0] === game[1][1]) {
        if (game[mostRecentSquare.row][mostRecentSquare.col] === game[0][0]) {
          let winner = currentTurn === 'X' ? 'O' : 'X';
          this.endGame(winner);
        }
      }
    }
  }

  updateBoard(row, col) {
    const { game, currentTurn, turnNumber, hasGameEnded } = this.state;
    if (game[row][col].length || hasGameEnded) return;
    game[row][col] = currentTurn;
    let nextTurn = turnNumber + 1;
    this.setState({
      game,
      currentTurn: currentTurn === 'X' ? 'O' : 'X',
      mostRecentSquare: {
        row,
        col,
      },
      turnNumber: nextTurn,
    });
  }

  beginGame() {
    this.setState({
      game: [['', '', ''], ['', '', ''], ['', '', '']],
      currentTurn: 'X',
      hasGameBegun: true,
      hasGameEnded: false,
      mostRecentSquare: {
        row: null,
        col: null,
      },
      turnNumber: 0,
    });
  }

  endGame(winner) {
    this.setState({
      hasGameEnded: true,
    });
  }

  render() {
    const {
      game,
      hasGameBegun,
      currentTurn,
      hasGameEnded,
    } = this.state;
    return (
      <div>
        <div
          className="section column is-12-mobile is-half-desktop is-offset-one-quarter-desktop has-text-centered"
        >
          {hasGameBegun
            ? <Board
                currentTurn={currentTurn}
                hasGameEnded={hasGameEnded}
                gameState={game}
                newGame={(row, col) => this.beginGame()}
                onClick={(row, col) => this.updateBoard(row, col)}
              />
            : <a className="button is-success" onClick={() => this.beginGame()}>New Game</a>}
        </div>
      </div>
    );
  }
}

export default App;
