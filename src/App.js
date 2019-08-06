import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
