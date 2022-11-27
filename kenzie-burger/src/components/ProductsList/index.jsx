import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import ProductsCard from "../ProductsCard";
import ListContainer from "./styles";



const ProductsList = ({products, setProductsCart, productsCart, search}) => {

    const addNotify = () => { 
        toast.error("Você já adicionou esse produto no carrinho!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

    function addCartProduct(id){

        const cartChecker = productsCart.find((product)=> product.id == id)

        products.map((product)=>{
            const productId = product.id 

            if(cartChecker == undefined && id == productId){
                setProductsCart([...productsCart, product])
            }

        })

        if(cartChecker != undefined){
            addNotify()
        }


    }

     const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()))

return(

    <div className="listOverflow">
    <ToastContainer autoClose={2000}/>
    <ListContainer key="listContainer">
    {
        filteredProducts.map((product)=>{
            const productId = product.id 
            const productName = product.name 
            const productCategory = product.category
            const productPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            const productImg = product.img

            return(
                <ProductsCard key={productId} productId={productId} productName={productName} productCategory={productCategory} productPrice={productPrice} productImg={productImg} addCartProduct={addCartProduct}/>
            )
        })
    }

    </ListContainer>
    </div>

)

}

export default ProductsList