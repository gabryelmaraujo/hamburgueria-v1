import React from "react";
import productImg from "../../assets/product1.svg"
import StyledCard from "./styles";

const ProductsCard = () => {

    return ( 
        <StyledCard>

            <div className="productImgDiv">
                <img src={productImg} alt="" className="productImg" />
            </div>
            <div className="productMain">
                <div className="productInfosDiv">
                    <h2 className="productName">Hamburguer</h2>
                    <p className="productType">Sanduíche</p>
                    <p className="productPrice">R$ 14.00</p>
                </div>
                <div className="productBttnDiv">
                    <button id="productBttn">Adicionar</button>
                </div>
            </div>

        </StyledCard>
    )

}

export default ProductsCard