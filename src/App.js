import React, { useReducer } from 'react';
import Routes from './routes';
import './styles/global.css';
import GameContext from './context/GameContext';
import { reducer, initialState } from './context/GameReduce';

function App() {
  const [game, dispatch] = useReducer(reducer, initialState)

  return (
    <GameContext.Provider
      value={{ gameState: game, gameDispatch: dispatch }}
    >
      <Routes />
    </GameContext.Provider>
  );
}

export default App;
