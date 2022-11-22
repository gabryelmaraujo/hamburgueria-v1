
import React from "react"

import HeaderLogo from "../HeaderLogo"
import InputSearch from "../InputSearch"
import AppHeader from "./styles.js"


const Header = () => {

    return (

        <AppHeader className="appHeader">
            <div className="headerContainer">
                <HeaderLogo/>

                <InputSearch/>
            </div>
        </AppHeader>

    )

}

export default Header