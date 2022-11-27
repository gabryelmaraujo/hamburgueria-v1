import styled from "styled-components"


const AppHeader = styled.header`
    width: 100%;
    height: 5rem;
    
    background-color: var(--grey-0);

    .headerContainer{

        height: 100%;
        /* width: 75rem; */
        padding: 0 4.375rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 600px){

        height: 7rem;
        padding: 10px 0;

        .headerContainer{
            flex-direction: column;
        }
    }

`

export default AppHeader