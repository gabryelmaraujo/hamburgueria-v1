import { prettyDOM } from "@testing-library/react";
import React from "react";
import TotalCartDiv from "./styles";

const TotalCart = ({productsCart}) => {

  const pricesArr = productsCart.map((product) => product.price)
  const finalPrice = pricesArr.reduce((accumulator, currentValue) => accumulator + currentValue,0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  return (
    <TotalCartDiv>
      <header className="totalCartHeader">
        <p className="totalCartTitle">Total</p>
        <p className="totalCartPrice">{
            productsCart.length > 0 ? (finalPrice) : ('')
            }</p>
      </header>
      <main className="totalCartMain">
        <button id="cartPayBttn">Fazer o pedido</button>
      </main>
    </TotalCartDiv>
  );
};

export default TotalCart;
