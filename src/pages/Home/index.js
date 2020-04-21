import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';
import GameContext from '../../context/GameContext';

export default function Home() {
  const [userName, setUserName] = useState('')
  const gameContext = useContext(GameContext)

  function startGame() {
    gameContext.gameDispatch({ type: 'add_user', user_name: userName })
  }

  return (
    <Container>
      <Card>
        <h2>Quiz App</h2>
        <input
          placeholder='Your Name'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        {userName && <Link to='/questions' onClick={startGame} className='btn-default'>Start Quiz</Link>}
      </Card>
    </Container>
  );
}
