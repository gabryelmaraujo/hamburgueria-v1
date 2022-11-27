import React from "react";

import EmptyCart from "./EmptyCart";

import CartProducts from "./CartProducts";
import CartContainer from "./styles";
import TotalCart from "./CartTotal";


const Cart = ({productsCart, setProductsCart}) => {

    
    function removeCartProduct(id){
        
        const onCart = [...productsCart]

        const filteredCart = onCart.filter((product) => product.id != id)

        setProductsCart(filteredCart)

    }

return(

    <CartContainer>
        <header className="cartHeader">
            <p className="cartTitle">
                Carrinho de compras
            </p>
        </header>
        <main className="cartMain">

            <div className="cartListDiv">
                <ul className="cartList">

                    { productsCart.length > 0 ? (productsCart.map((product)=>{
                            const productId = product.id 
                            const productName = product.name 
                            const productCategory = product.category
                            const productPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                            const productImg = product.img

                            return(
                                <CartProducts key={productId} productId={productId} productName={productName} productCategory={productCategory} productPrice={productPrice} productImg={productImg} productsCart={productsCart} setProductsCart={setProductsCart} removeCartProduct={removeCartProduct}/>
                            )
                        })) : (
                            <EmptyCart/>
                        )}
                </ul>

                { productsCart.length > 0 ? ( <TotalCart productsCart={productsCart}/> ) : ('')}
            </div>

        </main>
    </CartContainer>

)

}

export default Cart