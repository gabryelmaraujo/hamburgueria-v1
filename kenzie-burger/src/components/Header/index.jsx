
import React from "react"

import "./styles"

import HeaderLogo from "../HeaderLogo"
import InputSearch from "../InputSearch"


const Header = () => {

    return (

        <header className="appHeader">
            <HeaderLogo/>

            <InputSearch/>
        </header>

    )

}

export default Header