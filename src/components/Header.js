import React from 'react';
import './Components.css';

import NavBar from './NavBar';
function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className="title">Pomoć s tehnologijom</div>
          </div>
          <div className='col-md-4'>
            <div className='navbar'><NavBar /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;