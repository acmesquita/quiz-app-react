import React, { useContext, useState, useEffect } from 'react';
import GameContext from '../../context/GameContext';

import { Container, Wrapper, Option, BtnNext } from './styles';

export default function Question({ question, anwers, nextQuestion }) {
  const { gameState, gameDispatch } = useContext(GameContext)
  const [next, setNext] = useState(false)
  const [questions, setQuestions] = useState([])

  function validateAnwer(answer) {
    const correct_answer = gameState.current_question.correct_answer
    if (correct_answer === answer) {
      gameDispatch({ type: 'correct' })
    } else {
      gameDispatch({ type: 'error' })
    }
    setQuestions(anwers.map(item => {
      let color = item === correct_answer ? 'teal' : 'lightcoral'
      if (item === answer) color = 'lightblue'
      return (
        <Option key={item} color={color} >
          <p>{item}</p>
        </Option>
      )
    }
    ))
    setNext(true)
  }

  // Toda vez que a pergunta mudar, ele esconde o botão next
  useEffect(() => {
    setQuestions(anwers.map(item =>
      <Option onClick={() => validateAnwer(item)} key={item} color='lightgrey'>
        <p>{item}</p>
      </Option>
    ))
    setNext(false)
  }, [question, anwers])

  return (
    <Wrapper>
      <h3>{question}</h3>
      <Container>
        {questions}
      </Container>
      <BtnNext>
        {next && <button className='btn-default' onClick={nextQuestion}>Next Question</button>}
      </BtnNext>
    </Wrapper>
  );
}
