import styled from "styled-components";

const MainContainer = styled.div`
    width: 75rem;
    margin: 1.625rem auto;
    padding: 0;

    display: flex;
    justify-content: space-between;

    .listOverflow{
        
        margin-bottom: 30px;
        
    }

    @media (max-width:1200px){
        flex-direction: column;
        align-items: center;

        max-width: 100%;

    }

    @media (max-width: 870px){
        
        .listOverflow{
            padding: 0;

            overflow-x: scroll;

            max-width: 85%;

        }
    }

`

export default MainContainer