import React from 'react';

import { Container, Card } from './styles';

export default function Home() {
  return (
    <Container>
      <Card>
        <h2>Quiz App</h2>
        <input
          placeholder='Your Name'
        />
        <button>Start Quiz</button>
      </Card>
    </Container>
  );
}
