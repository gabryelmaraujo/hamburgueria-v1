
import styled from "styled-components";

const SearchDiv = styled.div`

    height: 60px;
    padding: 0 10px;
    width: 285px;

    background-color: var(--white);

    border: 1px solid var(--grey-1);
    border-radius: 8px;

    display: flex;
    align-items: center;

    .searchForm{
        width: 100%;
    }

    #searchInput{
        height: 56px;
        margin-right: 10px;
        border-top: 0px;
        border-left: 0px;
        border-bottom: 0px;
        border-right: 0px;
    }

    .searchBttn{
        height: 40px;

        background-color: var(--brand-1);
        color: var(--grey-0);

        border-top: 1px solid var(--grey-1);
        border-right: 1px solid var(--grey-1);
        border-bottom: 1px solid var(--grey-1);
        border-left: 0px;
        border-radius: 8px;
    }

`

export default SearchDiv