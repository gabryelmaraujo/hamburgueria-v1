import styled from "styled-components";

const CartItem = styled.li`

        display: flex;

        height: 80px;

        margin-bottom: 20px;

    .cartItemImgDiv{
        width: 70px;
        height: 70px;
    
        margin-right: 10px;

        background-color: var(--grey-1);

        border-radius: 5px;
    }

    .cartItemImg{
        width: 70px;
        height: 70px;
    }

    .cartItemInfosDiv{
        width: 170px;

        padding: 10px 0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .cartItemTitle{
        margin-bottom: 15px;
        font-weight: var(--font-w-1);
    }

    .cartItemDesc{}

    .cartItemButtons{
        padding: 10px 0;
    }

    #removeCartItemBttn{
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        color: var(--grey-2);
    }
    


`
export default CartItem