import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GameContext from '../../context/GameContext';
// import { Container } from './styles';

export default function GameOver() {
  const { gameDispatch } = useContext(GameContext);

  function resetGame() {
    gameDispatch({ type: 'reset' })
  }

  return (
    <>
      <h2>Acabou</h2>
      <Link to='/' className="btn-default" onClick={resetGame}>Restart</Link>
    </>
  );
}
