
import React from "react"

import HeaderLogo from "../HeaderLogo"
import InputSearch from "../InputSearch"
import AppHeader from "./styles.js"


const Header = ({products, setProducts, search, setSearch}) => {

    return (

        <AppHeader className="appHeader">
            <div className="headerContainer">
                <HeaderLogo/>

                <InputSearch products={products} setProducts={setProducts} search={search} setSearch={setSearch}/>
            </div>
        </AppHeader>

    )

}

export default Header