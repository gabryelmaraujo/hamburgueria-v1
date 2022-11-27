import styled from "styled-components";

const CartItem = styled.li`

        display: flex;

        height: 5rem;

        margin-bottom: 1.25rem;

    .cartItemImgDiv{
        width: 4.375rem;
        height: 4.375rem;
    
        margin-right: 0.625rem;

        background-color: var(--grey-1);

        border-radius: 0.313rem;
    }

    .cartItemImg{
        width: 4.375rem;
        height: 4.375rem;
    }

    .cartItemInfosDiv{
        width: 10.625rem;

        padding: 0.625rem 0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .cartItemTitle{
        margin-bottom: 0.938rem;
        font-weight: var(--font-w-1);
        text-align: start;
    }

    .cartItemDesc{}

    .cartItemButtons{
        padding: 0.625rem 0;
    }

    #removeCartItemBttn{
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        color: var(--grey-2);
    }
    


`
export default CartItem