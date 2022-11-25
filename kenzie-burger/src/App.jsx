import React, {useState} from 'react'

import ResetStyles from './resetStyles'
import GlobalStyles from './globalStyles'
import './App.css'

import styled from 'styled-components'

import Header from './components/Header'
import ProductsCard from './components/ProductsCard'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header/>

      <ProductsList/>

      <Cart/>
    </div>
  );
}

export default App;
