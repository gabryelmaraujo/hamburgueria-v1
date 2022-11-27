import { useState } from "react"
import SearchDiv from "./styles"


const InputSearch = ({products, setProducts, search, setSearch}) => {


    return(

        <SearchDiv>
            <form className="searchForm" onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" name="searchInput" id="searchInput" placeholder="Digitar pesquisa..." onChange={(e)=>setSearch(e.target.value)}/>
                <button className="searchBttn">Pesquisar</button>
            </form>
        </SearchDiv>

    )

}

export default InputSearch