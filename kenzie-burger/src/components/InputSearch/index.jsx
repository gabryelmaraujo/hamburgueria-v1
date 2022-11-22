import SearchDiv from "./styles"


const InputSearch = () => {

    return(

        <SearchDiv>
            <form className="searchForm">
                <input type="text" name="searchInput" id="searchInput" placeholder="Digitar pesquisa..."/>
                <button className="searchBttn">Pesquisar</button>
            </form>
        </SearchDiv>

    )

}

export default InputSearch