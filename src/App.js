import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header className='header' />
      <Navbar className='navbar' />
      <About className='about' />
    </div>);
}

export default App;
