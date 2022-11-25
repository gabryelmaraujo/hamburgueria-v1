import React, {useState} from 'react'

import ResetStyles from './resetStyles'
import GlobalStyles from './globalStyles'
import './App.css'

import styled from 'styled-components'

import Header from './components/Header'
import ProductsCard from './components/ProductsCard'
import ProductsList from './components/ProductsList'

function App() {
  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header/>

      <ProductsList/>
    </div>
  );
}

export default App;
