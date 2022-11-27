import styled from "styled-components";

const ListContainer = styled.ul`

    width: 52.5rem;

    padding: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 870px){
        width: 93.75rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
    }

`

export default ListContainer