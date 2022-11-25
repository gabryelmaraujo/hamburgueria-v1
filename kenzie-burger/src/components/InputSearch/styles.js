
import styled from "styled-components";

const SearchDiv = styled.div`

    height: 3.75rem;
    padding: 0 0.625rem;
    width: 17.813rem;

    background-color: var(--white);

    border: 0.063rem solid var(--grey-1);
    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    .searchForm{
        width: 100%;
    }

    #searchInput{
        height: 3.5rem;
        margin-right: 0.625rem;
        border: 0rem;
    }

    .searchBttn{
        height: 2.5rem;

        background-color: var(--brand-1);
        color: var(--grey-0);

        border-top: 0.063rem solid var(--grey-1);
        border-right: 0.063rem solid var(--grey-1);
        border-bottom: 0.063rem solid var(--grey-1);
        border-left: 0rem;
        border-radius: 0.5rem;
    }

`

export default SearchDiv