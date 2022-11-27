import styled from "styled-components";

const CartContainer = styled.div`

    width: 18.75rem;

    .cartHeader{
        background-color: var(--brand-1);
        color: var(--white);

        height: 3.75rem;
        padding: 0 1.25rem;

        border-radius: 0.313rem 0.313rem 0px 0px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: var(--title-3);
        font-weight: var(--font-w-1);

    }

    .cartMain{
        min-height: 9.875rem;
        width: 100%;

        border-radius: 0px 0px 0.313rem 0.313rem;

        background-color: var(--grey-0);

    }

    .cartList{
        padding: 0.625rem 0.625rem;
        max-height: 20.625rem;
        overflow-y: scroll;
        
    }

    @media (max-width: 870px){
        .cartList{
            max-height: 100px;
        }
    }

    .cartList::-webkit-scrollbar {
    width: 0px;
    }


    
`

export default CartContainer