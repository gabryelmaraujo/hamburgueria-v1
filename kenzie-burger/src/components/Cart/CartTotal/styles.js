import styled from "styled-components";

const TotalCartDiv = styled.div`

        border-top: 2px solid var(--grey-1);
        padding: 10px;
        height: 120px;

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
        padding: 20px 0;

        color: var(--grey-2);
        background-color: var(--grey-1);

        border: 1px solid var(--grey-1);
        border-radius: 8px;

        font-weight: var(--font-w-2);
        font-size: var(--text-1);
    }

`

export default TotalCartDiv