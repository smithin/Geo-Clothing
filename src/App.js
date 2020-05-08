import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopComponent from './pages/Shop/ShopComponent';
import Header from './components/Header/HeaderComponent';


import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopComponent} />
        </Switch>
    </div>
  );
}

export default App;
