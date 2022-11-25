import styled from "styled-components";

const StyledCard = styled.div`

    width: 300px;
    border: 2px solid var(--grey-1);
    border-radius: 5px;

    .productImgDiv{
        height: 150px;
        background-color: var(--grey-0);
        margin-bottom: 26px;
    }

    .productMain{
        padding: 0 12px;
    }

    .productInfosDiv{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
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
        margin-top: 14px;
        margin-bottom: 23px;
    }
    
    #productBttn{
        height: 40px;
        padding: 0 20px;

        border: 1px solid var(--brand-1);
        border-radius: 8px;

        background-color: var(--brand-1);
        color: var(--white);
    }

`

export default StyledCard