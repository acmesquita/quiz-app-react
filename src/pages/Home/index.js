import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';
import { getQuestions } from '../../services/api'
import GameContext from '../../context/GameContext';

export default function Home() {
  const [userName, setUserName] = useState('')
  const { gameDispatch } = useContext(GameContext)

  async function startGame() {
    gameDispatch({ type: 'add_user', user_name: userName })
    const apiQuestions = await getQuestions()
    gameDispatch({ type: 'add_questions', questions: apiQuestions })
    gameDispatch({ type: 'next_question' })
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
