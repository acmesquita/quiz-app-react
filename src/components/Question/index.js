import React, { useContext, useState } from 'react';
import GameContext from '../../context/GameContext';

// import { Container } from './styles';

export default function Question({ question, anwers, nextQuestion }) {
  const { gameDispatch } = useContext(GameContext)
  const [next, setNext] = useState(false)

  function validateAnwer() {

    setNext(true)
  }

  return (
    <>
      <h3>{question}</h3>
      {anwers.map(item =>
        <div>
          <input key={item} value={item} type="radio" name='answer' onClick={validateAnwer} />
          <label for={item}>{item}</label>
        </div>
      )}
      {next && <button className='btn-default' onClick={nextQuestion}>Next Question</button>}
    </>
  );
}
