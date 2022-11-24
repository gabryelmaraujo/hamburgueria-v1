import React, {useState} from 'react'

import ResetStyles from './resetStyles'
import GlobalStyles from './globalStyles'
import './App.css'
import './global.css'

import styled from 'styled-components'

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header/>
    </div>
  );
}

export default App;
