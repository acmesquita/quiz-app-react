import React, { useContext, useState, useEffect } from 'react';
import GameContext from '../../context/GameContext';

import { Container, Wrapper, Option } from './styles';

export default function Question({ question, anwers, nextQuestion }) {
  const { gameDispatch } = useContext(GameContext)
  const [next, setNext] = useState(false)

  function validateAnwer(anwer) {
    setNext(true)
  }

  // Toda vez que a pergunta mudar, ele esconde o botão next
  useEffect(() => {
    setNext(false)
  }, [question])

  return (
    <Wrapper>
      <h3>{question}</h3>
      <Container>
        {anwers.map(item =>
          <Option onClick={() => validateAnwer(item)}>
            <p>{item}</p>
          </Option>
        )}
      </Container>
      <div>
        {next && <button className='btn-default' onClick={nextQuestion}>Next Question</button>}
      </div>
    </Wrapper>
  );
}
