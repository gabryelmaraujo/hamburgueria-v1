import React from "react";

import EmptyCard from "./EmptyCart";

import CartProducts from "./CartProducts";
import CartContainer from "./styles";
import TotalCart from "./CartTotal";


const Cart = () => {

return(

    <CartContainer>
        <header className="cartHeader">
            <p className="cartTitle">
                Carrinho de compras
            </p>
        </header>
        <main className="cartMain">
            
            <EmptyCard/>

            <div className="cartListDiv">
                <ul className="cartList">
                    {/* <CartProducts/> */}
                </ul>
            </div>

            {/* <TotalCart/> */}

        </main>
    </CartContainer>

)

}

export default Cart