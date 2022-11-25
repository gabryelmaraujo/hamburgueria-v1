import styled from "styled-components";

const EmptyCartDiv = styled.div`
        width: 100%;
        height: 158px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    .emptyCartTitle{
        font-size: var(--title-3);
        font-weight: var(--font-w-1);
    }

    .emptyCartText{
        color: var(--grey-2);

        font-size: var(--text-2);
        font-weight: var(--font-w-4);
    }


`

export default EmptyCartDiv