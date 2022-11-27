import React, {useEffect, useState} from 'react'

import ResetStyles from './resetStyles'
import GlobalStyles from './globalStyles'
import './App.css'

import Header from './components/Header'

import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import MainContainer from './styles/MainContainer'
import instance from './data/api'

function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{

      async function getFunction(){
          try{

              const response = await instance.get()

              setProducts(response.data)

          }catch(error){
              console.log(error)
          }
      }

      getFunction()

  }, [])

  const [filteredProducts, setFilteredProducts] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [search, setSearch] = useState('')




  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header products={products} setProducts={setProducts} search={search} setSearch={setSearch}/>

      <MainContainer>
        <ProductsList key="productsList" products={products} setProductsCart={setProductsCart} productsCart={productsCart} search={search}/>

        <Cart productsCart={productsCart} setProductsCart={setProductsCart} cartTotal={cartTotal}/>
      </MainContainer>
    </div>
  );
}

export default App;
