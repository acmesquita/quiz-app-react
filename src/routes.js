import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import GameContext from './context/GameContext';

export default function Routes() {
  const { gameState } = useContext(GameContext)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        {gameState.started === true &&
          <Route path='/questions' exact component={Questions} />}
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}