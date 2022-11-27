import React from "react"

import styled from "styled-components"
import EmptyCartDiv from "./styles"

const EmptyCart = () => {

return(
    <EmptyCartDiv>
        <p className="emptyCartTitle">Sua sacola está vazia</p>
         <p className="emptyCartText">Adicione itens</p>
    </EmptyCartDiv>
)

}

export default EmptyCart
