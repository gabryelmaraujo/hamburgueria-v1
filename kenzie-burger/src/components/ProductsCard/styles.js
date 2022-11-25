import styled from "styled-components";

const StyledCard = styled.div`

    width: 15.625rem;
    border: 0.125rem solid var(--grey-1);
    border-radius: 0.313rem;
    margin-bottom: 1.25rem;

    .productImgDiv{
        height: 9.375rem;
        background-color: var(--grey-0);
        margin-bottom: 1.625rem;
    }

    .productMain{
        padding: 0 0.75rem;
    }

    .productInfosDiv{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.875rem;
    }

    .productName{}
    .productType{
        color: var(--grey-2);
        font-size: var(--text-3);
    }
    .productPrice{
        color: var(--brand-1);
        font-size: var(--text-2);
        font-weight: var(--font-w-2);
    }

    .productBttnDiv{
        display: flex;
        align-items: flex-start;
        margin-top: 0.875rem;
        margin-bottom: 1.438rem;
    }
    
    #productBttn{
        height: 2.5rem;
        padding: 0 1.25rem;

        border: 0.063rem solid var(--brand-1);
        border-radius: 0.5rem;

        background-color: var(--brand-1);
        color: var(--white);
    }

`

export default StyledCard