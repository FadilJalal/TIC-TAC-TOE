import { useState } from 'react';
import Header from "./Components/Header";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentPlayer) =>
      currentPlayer === 'X' ? 'O' : 'X'
    );
  }

  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayersymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
