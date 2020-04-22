import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import Question from '../../components/Question';
import GameOver from '../../components/GameOver';
import { Container } from './styles';

export default function Questions() {
  const { gameState, gameDispatch } = useContext(GameContext);

  function nextQuestion() {
    gameDispatch({ type: 'next_question' })
  }

  return (
    <Container>
      {gameState.finished && <GameOver />}
      {!gameState.finished &&
        <Question
          question={gameState.current_question.question}
          anwers={gameState.current_anwers}
          nextQuestion={nextQuestion}
        />
      }
    </Container>
  );
}
