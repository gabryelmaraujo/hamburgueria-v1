import styled from "styled-components";

const CartContainer = styled.div`

    width: 300px;

    .cartHeader{
        background-color: var(--brand-1);
        color: var(--white);

        height: 60px;
        padding: 0 20px;

        border-radius: 5px 5px 0px 0px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: var(--title-3);
        font-weight: var(--font-w-1);

    }

    .cartMain{
        min-height: 158px;
        width: 100%;

        border-radius: 0px 0px 5px 5px;

        background-color: var(--grey-0);

    }

    .cartList{
        padding: 10px 10px;
        max-height: 330px;
        overflow-y: scroll;
        
    }

    .cartList::-webkit-scrollbar {
    width: 0px;
    }


    .cartItem{
        display: flex;

        height: 80px;

        margin-bottom: 20px;
        
    }

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

export default CartContainer