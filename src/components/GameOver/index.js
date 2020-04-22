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
    const timeDiff = Math.abs(gameState.finish_game.getTime() - gameState.init_game.getTime());
    const diffMilissegundos = timeDiff
    const diffSegundos = parseInt(`${diffMilissegundos / 1000}`);
    const diffMinutos = parseInt(`${diffSegundos / 60}`);
    const diffHoras = parseInt(`${diffMinutos / 60}`);

    return `${diffHoras}:${diffMinutos}:${diffSegundos}`;
  }

  function percentEvaluation(){
    return (gameState.correct/gameState.questions.length)*100
  }

  function evaluation(){
    if(percentEvaluation > 50.0){
      return `Parabéns ${gameState.user_name} você foi aprovado!!!`;
    }
    return `Poxa ${gameState.user_name}, infelizmente não atingiu a pontuação mínima =/`;
  }

  return (
    <Container>
      <h1>{evaluation()}</h1>
      <p>INFORMAÇÕES</p>
      <h3>Total de acertos: {gameState.correct}</h3>
      <h3>Total de erros: {gameState.errors}</h3>
      <h3>Percentual: {percentEvaluation()}%</h3>
      <h3>Tempo total: {duration()}</h3>
      <Link to='/' className="btn-default" onClick={resetGame}>Restart</Link>
    </Container>
  );
}
