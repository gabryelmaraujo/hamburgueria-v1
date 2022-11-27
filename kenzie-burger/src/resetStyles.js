import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    *{
        text-decoration: none;
        color: unset;
        font-family:'Inter', sans-serif;
        margin: 0;
    }

    button{
        cursor: pointer;
    }

`
export default ResetStyles