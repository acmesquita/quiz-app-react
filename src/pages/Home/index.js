import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';

export default function Home() {
  const [userName, setUserName] = useState('')

  return (
    <Container>
      <Card>
        <h2>Quiz App</h2>
        <input
          placeholder='Your Name'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        {userName && <Link to='/questions' className='btn-default'>Start Quiz</Link>}
      </Card>
    </Container>
  );
}
