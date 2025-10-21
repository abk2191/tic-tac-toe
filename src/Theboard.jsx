function Theboard({ updateBoard, value, winningIndexes }) {
  return (
    <>
      <div className="board">
        <button
          className={`buttons ${
            winningIndexes.includes(0) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(0)}
        >
          {value[0] && (
            <span className={`symbol symbol-${value[0]}`}>{value[0]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(1) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(1)}
        >
          {value[1] && (
            <span className={`symbol symbol-${value[1]}`}>{value[1]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(2) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(2)}
        >
          {value[2] && (
            <span className={`symbol symbol-${value[2]}`}>{value[2]}</span>
          )}
        </button>
      </div>
      <div className="board">
        <button
          className={`buttons ${
            winningIndexes.includes(3) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(3)}
        >
          {value[3] && (
            <span className={`symbol symbol-${value[3]}`}>{value[3]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(4) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(4)}
        >
          {value[4] && (
            <span className={`symbol symbol-${value[4]}`}>{value[4]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(5) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(5)}
        >
          {value[5] && (
            <span className={`symbol symbol-${value[5]}`}>{value[5]}</span>
          )}
        </button>
      </div>
      <div className="board">
        <button
          className={`buttons ${
            winningIndexes.includes(6) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(6)}
        >
          {value[6] && (
            <span className={`symbol symbol-${value[6]}`}>{value[6]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(7) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(7)}
        >
          {value[7] && (
            <span className={`symbol symbol-${value[7]}`}>{value[7]}</span>
          )}
        </button>
        <button
          className={`buttons ${
            winningIndexes.includes(8) ? "winning-cell" : ""
          }`}
          onClick={() => updateBoard(8)}
        >
          {value[8] && (
            <span className={`symbol symbol-${value[8]}`}>{value[8]}</span>
          )}
        </button>
      </div>
    </>
  );
}

export default Theboard;
