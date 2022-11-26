
import ProductsCard from "../ProductsCard";
import ListContainer from "./styles";

const ProductsList = ({products}) => {



return(

    <div className="listOverflow">
    <ListContainer>
    {
        products.map((product)=>{
            const productId = product.id 
            const productName = product.name 
            const productCategory = product.category
            const productPrice = product.price 
            const productImg = product.img

            return(
                <ProductsCard productId={productId} productName={productName} productCategory={productCategory} productPrice={productPrice} productImg={productImg}/>
            )
        })
    }
        {/* <ProductsCard/> */}

    </ListContainer>
    </div>

)

}

export default ProductsList