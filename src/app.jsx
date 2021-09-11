import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Maker from './components/Maker/Maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/card-maker']}>
          <Login authService={authService} />
        </Route>
        <Route exact path="/card-maker/maker">
          <Maker
            FileInput={FileInput}
            authService={authService}
            cardRepository={cardRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
