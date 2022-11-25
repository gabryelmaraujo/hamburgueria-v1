import React from "react";
import TotalCartDiv from "./styles";

const TotalCart = () => {
  return (
    <TotalCartDiv>
      <header className="totalCartHeader">
        <p className="totalCartTitle">Total</p>
        <p className="totalCartPrice">R$ 999.99</p>
      </header>
      <main className="totalCartMain">
        <button id="cartPayBttn">Fazer o pedido</button>
      </main>
    </TotalCartDiv>
  );
};

export default TotalCart;
