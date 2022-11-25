import React from "react";

import productImg from "../../../assets/product1.svg"
import CartItem from "./styles";

const CartProducts = () => {
  return (
    <CartItem>
      <div className="cartItemImgDiv">
        <img src={productImg} alt="" className="cartItemImg" />
      </div>
      <div className="cartItemInfosDiv">
        <p className="cartItemTitle">Hamburger </p>
        <p className="cartItemDesc">X-Burge</p>
      </div>
      <div className="cartItemButtons">
        <button id="removeCartItemBttn">Remover</button>
      </div>
    </CartItem>
  );
};

export default CartProducts;
