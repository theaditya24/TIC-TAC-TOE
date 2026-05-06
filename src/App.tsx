import React, { useState, useEffect } from 'react';
import './App.css';

type Player = 'X' | 'O' | null;

const App: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | 'Draw'>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (squares.every((square) => square !== null)) {
      return { winner: 'Draw' as const, line: null };
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  return (
    <div className="container">
      <header>
        <h1>Tic Tac Toe</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <div className="game-info">
        {!winner ? (
          <p>
            Next Player: <span className={`player-${isXNext ? 'X' : 'O'}`}>{isXNext ? 'X' : 'O'}</span>
          </p>
        ) : (
          <p className="status">
            {winner === 'Draw' ? "It's a Draw!" : (
              <>
                Winner: <span className={`player-${winner}`}>{winner}</span>
              </>
            )}
          </p>
        )}
      </div>

      <div className="board">
        {board.map((cell, index) => {
          const isWinningCell = winningLine?.includes(index);
          return (
            <button
              key={index}
              className={`cell ${cell ? 'filled' : ''} ${isWinningCell ? 'winning' : ''}`}
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner}
            >
              <span className={cell ? `mark mark-${cell}` : ''}>{cell}</span>
            </button>
          );
        })}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
