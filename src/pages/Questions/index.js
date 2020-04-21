import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';

// import { Container } from './styles';

export default function Questions() {
  const gameContext = useContext(GameContext);
  return (
    <h1>Hello {gameContext.gameState.user_name}</h1>
  );
}
