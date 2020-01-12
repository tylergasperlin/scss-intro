import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <nav className="clearfix">
      <ul className="navigation">
        <li><a href="#">About US</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#"></a></li>

      </ul>
      <div className="buttons">
        <a className="btn-main" href="#">Sign Up</a>
        <a className="btn-hot" href="#">Get a Quote</a>
      </div>
    </nav>
  );
}

export default App;
