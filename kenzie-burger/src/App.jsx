import './App.css'
import './reset.css'
import './global.css'

import React, {useState} from 'react'

import styled from 'styled-components'

import logo from './logo.svg'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
