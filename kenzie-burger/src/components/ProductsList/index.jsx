
import ProductsCard from "../ProductsCard";
import ListContainer from "./styles";

const ProductsList = ({products, filteredProducts, setProductsCart, productsCart}) => {


    function addCartProduct(id){

        products.map((product)=>{
            const productId = product.id 

            if(id == productId){
                setProductsCart([...productsCart, product])
            }
        })


    }

    function removeCartProduct(){}


return(

    <div className="listOverflow">
    <ListContainer key="listContainer">
    {
        products.map((product)=>{
            const productId = product.id 
            const productName = product.name 
            const productCategory = product.category
            const productPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            const productImg = product.img

            return(
                <ProductsCard key={productId} productId={productId} productName={productName} productCategory={productCategory} productPrice={productPrice} productImg={productImg} addCartProduct={addCartProduct}/>
            )
        })
    }

    </ListContainer>
    </div>

)

}

export default ProductsList