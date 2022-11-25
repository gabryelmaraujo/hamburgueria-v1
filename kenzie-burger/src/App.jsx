import React, {useState} from 'react'

import ResetStyles from './resetStyles'
import GlobalStyles from './globalStyles'
import './App.css'

import Header from './components/Header'

import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import MainContainer from './styles/MainContainer'

function App() {
  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header/>

      <MainContainer>
        <ProductsList/>

        <Cart/>
      </MainContainer>
    </div>
  );
}

export default App;
