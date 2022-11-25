import React from "react";
import CartContainer from "./styles";

const Cart = () => {

return(

    <CartContainer>
        <header className="cartHeader">
            <h2 className="cartTitle">
                Carrinho de compras
            </h2>
        </header>
        <main className="cartMain">
            <div className="emptyCartDiv">
                <p className="emptyCartTitle">Sua sacola está vazia</p>
                <p className="emptyCartText">Adicione itens</p>
            </div>
        </main>
    </CartContainer>

)

}

export default Cart