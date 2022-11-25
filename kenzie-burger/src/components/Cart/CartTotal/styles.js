import styled from "styled-components";

const TotalCartDiv = styled.div`

        border-top: 0.125rem solid var(--grey-1);
        padding: 0.625rem;
        height: 7.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

    .totalCartHeader{
        display: flex;
        justify-content: space-between;
    }

    .totalCartTitle{
        font-size: var(--text-2);
        font-weight: var(--font-w-2);
    }

    .totalCartPrice{
        color: var(--grey-2);
        font-size: var(--text-2);
        font-weight: var(--font-w-2);
    }

    .totalCartMain{}

    #cartPayBttn{
        width: 100%;
        padding: 1.25rem 0;

        color: var(--grey-2);
        background-color: var(--grey-1);

        border: 0.063rem solid var(--grey-1);
        border-radius: 0.5rem;

        font-weight: var(--font-w-2);
        font-size: var(--text-1);
    }

`

export default TotalCartDiv