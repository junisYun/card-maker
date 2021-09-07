import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Maker from './components/Maker/Maker';

function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route exact path="/maker">
          <Maker authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
