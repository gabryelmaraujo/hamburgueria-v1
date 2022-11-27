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




  return (
    <div className="App">
      <ResetStyles/>
      <GlobalStyles/>

      <Header/>

      <MainContainer>
        <ProductsList key="productsList" products={products} filteredProducts={filteredProducts} setProductsCart={setProductsCart} productsCart={productsCart}/>

        <Cart productsCart={productsCart} setProductsCart={setProductsCart} cartTotal={cartTotal}/>
      </MainContainer>
    </div>
  );
}

export default App;
