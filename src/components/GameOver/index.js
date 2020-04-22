import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import { Container } from './styles';

export default function GameOver() {
  const { gameState, gameDispatch } = useContext(GameContext);

  function resetGame() {
    gameDispatch({ type: 'reset' })
  }

  function duration() {
    var timeDiff = Math.abs(gameState.finish_game.getTime() - gameState.init_game.getTime());
    var diffMilissegundos = timeDiff
    var diffSegundos = parseInt(`${diffMilissegundos / 1000}`);
    var diffMinutos = parseInt(`${diffSegundos / 60}`);
    var diffHoras = parseInt(`${diffMinutos / 60}`);

    return `${diffHoras}:${diffMinutos}:${diffSegundos}`;
  }

  return (
    <Container>
      <h1>Acabou {gameState.user_name}</h1>
      <h3>Total de acertos: {gameState.correct}</h3>
      <h3>Total de erros: {gameState.errors}</h3>
      <h3>Tempo total: {duration()}</h3>
      <Link to='/' className="btn-default" onClick={resetGame}>Restart</Link>
    </Container>
  );
}