import React from "react";

import CartItem from "./styles";

const CartProducts = ({productId, productName, productCategory, productPrice, productImg}) => {
  return (
    <CartItem id={productId} key={productId}>
      <div className="cartItemImgDiv">
        <img src={productImg} alt="" className="cartItemImg" />
      </div>
      <div className="cartItemInfosDiv">
        <p className="cartItemTitle">{productName} </p>
        <p className="cartItemDesc">{productCategory}</p>
      </div>
      <div className="cartItemButtons">
        <button id="removeCartItemBttn">Remover</button>
      </div>
    </CartItem>
  );
};

export default CartProducts;
