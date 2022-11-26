import React from "react";
import ProductsCard from "../ProductsCard";
import ListContainer from "./styles";

const ProductsList = () => {

return(

    <div className="listOverflow">
    <ListContainer>

        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>

    </ListContainer>
    </div>

)

}

export default ProductsList