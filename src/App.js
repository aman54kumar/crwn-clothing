import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';


const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div>
        <Homepage />
        <Hats />
      </div>
    </BrowserRouter>
  );
}


export default App;
