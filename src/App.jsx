import { useState, useRef, useEffect } from "react";
import Theboard from "./Theboard";
import Confetti from "react-confetti";

function App() {
  const [xPlayed, setXPlayed] = useState(true);
  const [value, setValue] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningIndexes, setWinningIndexes] = useState([]);
  const [history, setHistory] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const audioRef = useRef(null);

  const updateBoard = (index) => {
    if (value[index] || winner) return;

    setHistory((prev) => [
      ...prev,
      {
        board: [...value],
        xPlayed: xPlayed,
        player: player,
        winner: winner,
        winningIndexes: [...winningIndexes],
      },
    ]);

    const newValue = [...value];
    newValue[index] = xPlayed ? "X" : "O";
    setPlayer(xPlayed ? "O" : "X");

    const gameWinner = calculatewinner(newValue); // Get the winner
    if (gameWinner) {
      setWinner(gameWinner); // Set winner state
      setShowConfetti(true);
      // Play sound when someone wins
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset to start
        audioRef.current.play();
      }
    } else if (newValue.every((cell) => cell !== null)) {
      // If all cells are filled and no winner, it's a draw
      setWinner("Draw");
    }

    setValue(newValue);
    setXPlayed(!xPlayed);
  };

  const calculatewinner = (value) => {
    {
      /* This is the diagonal line */
    }
    if (value[0] === "X" && value[4] === "X" && value[8] === "X") {
      setWinningIndexes([0, 4, 8]);
      console.log("X wins");
      return "X";
    }

    if (value[0] === "O" && value[4] === "O" && value[8] === "O") {
      console.log("O wins");
      setWinningIndexes([0, 4, 8]);
      return "O";
    }

    {
      /* This is row 1 */
    }
    if (value[0] === "X" && value[1] === "X" && value[2] === "X") {
      console.log("X wins");
      setWinningIndexes([0, 1, 2]);
      return "X";
    }

    if (value[0] === "O" && value[1] === "O" && value[2] === "O") {
      console.log("O wins");
      setWinningIndexes([0, 1, 2]);
      return "O";
    }

    {
      /* This is row 2 */
    }
    if (value[3] === "X" && value[4] === "X" && value[5] === "X") {
      console.log("X wins");
      setWinningIndexes([3, 4, 5]);
      return "X";
    }

    if (value[3] === "O" && value[4] === "O" && value[5] === "O") {
      console.log("O wins");
      setWinningIndexes([3, 4, 5]);
      return "O";
    }
    {
      /* This is row 3 */
    }
    if (value[6] === "X" && value[7] === "X" && value[8] === "X") {
      console.log("X wins");
      setWinningIndexes([6, 7, 8]);
      return "X";
    }

    if (value[6] === "O" && value[7] === "O" && value[8] === "O") {
      console.log("O wins");
      setWinningIndexes([6, 7, 8]);
      return "O";
    }
    {
      /* This is col 1 */
    }
    if (value[0] === "X" && value[3] === "X" && value[6] === "X") {
      console.log("X wins");
      setWinningIndexes([0, 3, 6]);
      return "X";
    }

    if (value[0] === "O" && value[3] === "O" && value[6] === "O") {
      console.log("O wins");
      setWinningIndexes([0, 3, 6]);
      return "O";
    }
    {
      /* This is col 2 */
    }
    if (value[1] === "X" && value[4] === "X" && value[7] === "X") {
      console.log("X wins");
      setWinningIndexes([1, 4, 7]);
      return "X";
    }

    if (value[1] === "O" && value[4] === "O" && value[7] === "O") {
      console.log("O wins");
      setWinningIndexes([1, 4, 7]);
      return "O";
    }
    {
      /* This is col 3 */
    }
    if (value[2] === "X" && value[5] === "X" && value[8] === "X") {
      console.log("X wins");
      setWinningIndexes([4, 5, 8]);
      return "X";
    }

    if (value[2] === "O" && value[5] === "O" && value[8] === "O") {
      console.log("O wins");
      setWinningIndexes([4, 5, 8]);
      return "O";
    }
    {
      /* This is another diagonal line */
    }
    if (value[2] === "X" && value[4] === "X" && value[6] === "X") {
      console.log("X wins");
      setWinningIndexes([2, 4, 6]);
      return "X";
    }

    if (value[2] === "O" && value[4] === "O" && value[6] === "O") {
      console.log("O wins");
      setWinningIndexes([2, 4, 6]);
      return "O";
    }
    return null; // No winner
  };

  const undoMove = () => {
    if (history.length === 0) return; // Nothing to undo

    // Get the last state from history
    const lastState = history[history.length - 1];

    // Restore the previous state
    setValue(lastState.board);
    setXPlayed(lastState.xPlayed);
    setPlayer(lastState.player);
    setWinner(lastState.winner);
    setWinningIndexes(lastState.winningIndexes);

    // Remove the last state from history
    setHistory((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (!winner) {
      setShowConfetti(false);
    }
  }, [winner]);

  return (
    <>
      <audio ref={audioRef} src="./winner-sound.mp3" preload="auto" />
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={150}
          gravity={0.15}
          wind={0}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        />
      )}
      <h2
        style={{
          fontFamily: "Amarante, serif",
        }}
        className="gradient-text"
      >
        Classic Tic-Tac-Toe
      </h2>
      <div className="container">
        {winner === "Draw" ? (
          <p style={{ fontFamily: "Inter, sans-serif", color: "white" }}>
            It's a Draw! 🤝
          </p>
        ) : winner ? (
          <p style={{ fontFamily: "Inter, sans-serif", color: "white" }}>
            {winner} Wins!
          </p>
        ) : (
          <p style={{ fontFamily: "Inter, sans-serif", color: "white" }}>
            {player}'s Turn
          </p>
        )}
        <Theboard
          updateBoard={updateBoard}
          value={value}
          winningIndexes={winningIndexes}
        />
        <button
          onClick={undoMove}
          disabled={history.length === 0}
          className="undo-button"
        >
          Undo Move ({history.length} moves)
        </button>
        <button
          onClick={() => window.location.reload()}
          disabled={history.length === 0}
          className="restart-button"
        >
          Restart Game
        </button>
      </div>
    </>
  );
}

export default App;
