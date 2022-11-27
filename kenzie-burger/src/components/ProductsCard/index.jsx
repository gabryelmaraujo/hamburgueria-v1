import React from "react";

import AddProductBttn from "./AddProductBttn";
import StyledCard from "./styles";

const ProductsCard = ({productId, productName, productCategory, productPrice, productImg, addCartProduct}) => {


    return ( 
        <StyledCard key={productId} id={productId}>

            <div className="productImgDiv">
                <img src={productImg} alt={productName} className="productImg" />
            </div>
            <div className="productMain">
                <div className="productInfosDiv">
                    <h2 className="productName">{productName}</h2>
                    <p className="productType">{productCategory}</p>
                    <p className="productPrice">{productPrice}</p>
                </div>
                <AddProductBttn addCartProduct={addCartProduct}/>
            </div>

        </StyledCard>
    )

}

export default ProductsCard