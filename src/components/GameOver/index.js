import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function GameOver() {
  return (
    <>
      <h2>Acabou</h2>
      <Link to='/' className="btn-default">Restart</Link>
    </>
  );
}
