import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" >
      <Header/>
     
      <div className="routes">
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/experience" component={Experience} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
