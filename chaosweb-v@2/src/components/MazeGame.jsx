import { useState, useEffect, useCallback } from 'react';
import './MazeGame.css';

const mazeDesigns = [
  [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
  ],
  [
    [0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0], 
  ],
  [
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0], 
  ],
  [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0], 
  ],
  [
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0], 
  ],
  [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0], 
  ],
];

const getRandomMaze = () => {
  return mazeDesigns[Math.floor(Math.random() * mazeDesigns.length)];
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to get a random font size
const getRandomFontSize = () => {
  return `${Math.random() * (32 - 16) + 16}px`; // Random size between 16px and 32px
};

const MazeGame = () => {
  const [maze, setMaze] = useState(getRandomMaze());
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [headingStyle, setHeadingStyle] = useState({
    color: getRandomColor(),
  });

  // Move the player based on direction
  const movePlayer = useCallback((dx, dy) => {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    if (
      newX >= 0 &&
      newX < maze.length &&
      newY >= 0 &&
      newY < maze[0].length &&
      maze[newX][newY] === 0
    ) {
      setPlayerPos({ x: newX, y: newY });
    }

    // Check if player reached the end position
    if (newX === maze.length - 1 && newY === maze[0].length - 1) {
      setGameOver(true);
    }
  }, [maze, playerPos]);

  // Handle keypress events for player movement
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          movePlayer(0, -1);
          break;
        case 'ArrowDown':
          movePlayer(0, 1);
          break;
        case 'ArrowLeft':
          movePlayer(-1, 0);
          break;
        case 'ArrowRight':
          movePlayer(1, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [movePlayer, gameOver]);

  // Reset game to start a new maze
  const resetGame = () => {
    setMaze(getRandomMaze());
    setPlayerPos({ x: 0, y: 0 });
    setGameOver(false);
  };

  // Automatically reset game after winning
  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  }, [gameOver]);

  // Change heading color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingStyle({
        color: getRandomColor(),
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const heading = "The Chaotic Maze Game";

  return (
    <div className="maze">
      <h2 className="maze-heading">
        {heading.split("").map((char, index) => (
          <span key={index} style={{ color: headingStyle.color, fontSize: getRandomFontSize() }}>
            {char}
          </span>
        ))}
      </h2>
      {gameOver && <div className="game-over">Congratulations! You reached the end!</div>}
      <div className="maze-grid">
        {maze.map((row, x) => (
          <div key={x} className="maze-row">
            {row.map((cell, y) => {
              let cellClass = 'maze-cell';
              if (cell === 1) cellClass += ' wall'; // Wall style
              if (x === playerPos.x && y === playerPos.y) cellClass += ' player'; // Player style
              if (x === 0 && y === 0) cellClass += ' start'; // Start position
              if (x === maze.length - 1 && y === maze[0].length - 1) cellClass += ' end'; // End position
              return <div key={y} className={cellClass}></div>;
            })}
          </div>
        ))}
      </div>
      <h2 className="bottom-heading">Can you navigate the chaos?</h2>
      <h3 className='heading'>Use arrow keys to move</h3>
    </div>
  );
};

export default MazeGame;
