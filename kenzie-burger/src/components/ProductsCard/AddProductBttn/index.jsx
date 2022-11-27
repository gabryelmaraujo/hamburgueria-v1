
const AddProductBttn = ({addCartProduct}) => {

    return(
        <div className="productBttnDiv">
            <button id="productBttn" 
            onClick={(e)=>{

                const itemId = e.target.parentElement.parentElement.parentElement.id

                addCartProduct(itemId)

                }}>Adicionar</button>
        </div>
    )

}

export default AddProductBttn